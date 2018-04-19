    /*-------------------------------------------------\
    |                                                  |
    |                   LES BOUCLES                    |
    |                                                  |
    \ ------------------------------------------------*/ 




/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
var n = 0;
/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

 console.log(Prenoms);
for     ( let n=0 ; n < Prenoms.length ; n++) {
        document.write('<p>Instruction Executée : <strong>' + Prenoms[n] + '</strong>');
}

/** AVEC LA BOUCLE WHILE */

var j = 0
while   (j < Prenoms.length) {
        document.write('<p>Instruction Executée : <strong>' + Prenoms[j] + '</strong>');
        j++;
}