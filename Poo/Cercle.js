class Cercle {
    constructor(r) {this.rayon = r;}

    perimetre() {
        return (Math.PI) * (2*this.rayon);
    }

    aire() {
        return (Math.PI) * (Math.sqrt(this.rayon));
    }
}

let c = new Cercle(32);
console.log(c.perimetre());
console.log(c.aire());