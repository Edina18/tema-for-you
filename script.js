// La un hotel pentru animale:

var numberOfDogs = 12;
var numberOfCats = 5;
var numberOfEmployees = 3;

// Implementati urmatoarele functii:

// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare

// b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat

// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.

// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare

// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.

// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"

// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"


// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare

var maxCaini = 15

function disponibil() {
    if ( numberOfDogs < maxCaini) {
        console.log('Avem locuri disponibile!');
    } else {
        console.log('Nu mai sunt locuri disponibile!');
    }
}
var raspunsA = disponibil();

// b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat


var maxAnimale = 30

var toateAnimalele = numberOfCats + numberOfDogs

function nrAnimale () {
    if ( toateAnimalele < maxAnimale) {
        console.log('Hotelul nu este supra-aglomerat');
    } else {
        console.log('Hotelul este supra-aglomerat');
    }
}
var raspunsB = nrAnimale();

// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.

var numberOfCats = 5
var numberOfDogs = 12

function nrJucarii () {
    nrJucariiPisici = 3 * numberOfCats;
    nrJucariiCaini = 5 * numberOfDogs;
    nrJucariiTotal = ( 3 * numberOfCats ) + ( 5 * numberOfDogs );
    console.log('Numarul jucariilor pentru pisici',nrJucariiPisici,'Numarul jucariilor pentru caini',nrJucariiCaini);
    console.log('Numarul total al jucariilor de care avem nevoie', nrJucariiTotal);
}

var raspunsC = nrJucarii();


// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare

function ingrijire () {
    if ((maxAnimale < 20) || ( numberOfEmployees > 5)) {
        console.log('Animalele sunt bine ingrijite!');
    } else {
        console.log('Animalele nu sunt suficient de ingrijite!');
    }
}

raspunsC = ingrijire();


// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.


function bonus () {
    if (( maxAnimale + numberOfEmployees + 1) % 7 ) {
        console.log('Patronul trebuie sa plateasca', numberOfEmployees * 100);
    } else {
        console.log('Angajatii nu vor primi bonus');
    }
}

raspunsE = bonus();



// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"
// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"

function impar () {
    if ((( numberOfDogs % 2) === 1 ) && (( numberOfCats % 2) === 1)) {
        console.log('Paritate Si');
    } else if  ((( numberOfDogs % 2) === 1 ) || (( numberOfCats % 2) === 1)) {
        console.log('Paritate SAU');
    } else {
        console.log('Paritate');
    }
        
    }

raspunsFG = impar();