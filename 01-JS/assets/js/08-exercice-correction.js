/* ---------------------------------
           LES CONDITIONS 🙏
-----------------------------------*/

/* ----------------------------------------------------------------------------
          EXERCICE 

Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
----------------------------------------------------------------------------- */
 
// -- 1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// -- 2. Créer une fonction pour vérifier son age.

/**
 * Retourne VRAI si majeur.
 * FAUX sinon.
 * @param {Number} age 
 */
function estMajeur(age) {
    if(age >= MajoriteLegaleFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var ageSaisieParMonUtilisateur = parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));

// -- 4. Vérification de l'age du visiteur....
if( estMajeur(ageSaisieParMonUtilisateur) ) {

    // -- 4a. J'affiche un message de bienvenue
    alert('Bienvenue sur mon site internet réservé aux majeurs...');
    document.write("0_0 !!!");

} else {
    
    // -- 4b. J'effectue une redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

}




/* ------------------------------------------------------------------
|                                                          |
|           LES OPERATEURS DE COMPARAISONS  🙏            |
|
|    L'opérateur de comparaison " == " signifie :
|    Egal à. Il permet de vérifier que 2 variables
|    sont identiques.
|
|    L'opérateur de comparaison " === " signifie :
|    Strictement Egal à. Il va comparer la valeur,
|    mais aussi le type.
|
|    L'opérateur de comparaison " != " signifie :
|    Différent de.
|
|    L'opérateur de comparaison " !== " signifie :
|    Strictement Différent de.
|
----------------------------------------------------------------------*/