// On attend que le document soit chargé

document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('#btn');

    button.addEventListener('click', () => {
        fetch('exemple.txt')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erreur de réseau.');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
        console.error('Erreur: ', error);
        document.getElementById('content').innerHTML = 'Erreur requête fetch : ' + error.message;
    });
    });
});