let i = 10; // Portée globale
let j = 20; 

function test()
    {
        let i = 40; // Déconseillé
        let j = 50; // Portée locale à la fonction
        for(let k = 0; k < 5; k++)
        {
            console.log("k = ",k);
            let j = 60; // Portée locale au bloc for
        }
        // console.log(k); // k is not defined
        console.log("i = ",i);
        console.log("j = ",j);
    }

test();
console.log(i);