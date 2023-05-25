//La un hotel pentru animale:

var numberOfDogs = 14;
var numberOfCats = 1;
var numberOfEmployees = 3;

//Implementati urmatoarele functii:

//a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare
console.log ('******* Punctul a *******');

function locuriDispo (locuri){
    var nr = 15 - locuri;
    if (nr == 1){
        console.log ('Avem',nr,'loc disponibil pentru caini.');
    }
    else if ( locuri < 15){
        console.log ('Avem',nr,'locuri disponibile pentru caini.');
    }
    else if ( locuri >= 15){
        console.log ('Nu mai avem locuri disponibile pentru caini.');
    }
}

var checkLocuri = locuriDispo (numberOfDogs);

//b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat
console.log ('******* Punctul b *******');

function animaleMax ( animal1, animal2){
    var sumMax = animal1 + animal2;
    var locuridispo = 30 - sumMax;
    if( sumMax >= 30){
        console.log('Hotelul este supra-aglomerat.');
    }
    else if(locuridispo == 1){
        console.log('Mai este',locuridispo,'loc disponibil in Hotel.');
    }
    else{
        console.log('Mai sunt',locuridispo,'locuri disponibile in Hotel.');
    }
    return sumMax;
}

var checkMax = animaleMax(numberOfDogs, numberOfCats);

//c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.
console.log ('******* Punctul c *******');

function jucarii(animal1, animal2){
    var jucariiCat = animal1 * 3;
    var jucariiDog = animal2 * 5;
    console.log('Jucarii necesare pentru Pisici:', jucariiCat);
    console.log('Jucarii necesare pentru Catei:', jucariiDog);

    var totalJucarii = jucariiCat + jucariiDog;
    console.log('Total jucarii necesare:', totalJucarii);

    return jucariiCat, jucariiDog, totalJucarii;
}

var checkJucarii = jucarii(numberOfCats, numberOfDogs);

//d) daca numarul total al animalelor este mai mic de 20 si sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare
console.log ('******* Punctul d *******');

function animaleAngajati(animal1, animal2, angajati){
    var totalAnimale = animal1 + animal2;

    if((totalAnimale < 20) && (angajati >= 5)){
        console.log('Animalele sunt bine ingrijite.');
    }
    else{
        console.log('Mai trebuie angajat personal.');
    }

}

var checkAnimaleAngajati = animaleAngajati(numberOfCats, numberOfDogs, numberOfEmployees);

//e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.
console.log ('******* Punctul e *******');

function vizitaPatron (animal1, animal2, angajati){
    var fiinte = animal1 + animal2 + angajati;
    var multiplu = fiinte % 7;

    if (multiplu == 0){
        var castig = angajati * 100;
        console.log('Vizita la costat pe patron', castig);
    }
    else{
        console.log('Nu este multiplu de 7');
    }

}

var checkVizita = vizitaPatron(numberOfCats, numberOfDogs, numberOfEmployees);

//f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"
console.log ('******* Punctul f *******');

function Paritate (animal1, animal2){
    var nrparcaini = animal1 % 2;
    var nrparpisici = animal2 % 2;
    if ((nrparcaini != 0  ) && (nrparpisici != 0)){
        console.log ('Paritate SI');
    }
}

var checkParitate = Paritate(numberOfDogs, numberOfCats);

//g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"
console.log ('******* Punctul e *******');

function Paritate2 (animal1, animal2){
    var nrparcaini = animal1 % 2;
    var nrparpisici = animal2 % 2;
    if ((nrparcaini != 0  ) || (nrparpisici != 0)){
        console.log ('Paritate SAU');
    }
}

var checkParitate2 = Paritate2(numberOfDogs, numberOfCats);