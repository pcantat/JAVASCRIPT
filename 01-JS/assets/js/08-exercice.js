
/* ---------------------------------------------------------------------------------------------
EXERCICE 
** Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
** S'il a la majorité légale, alors je lui souhaite la bienvenue, 
** sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
--------------------------------------------------------------------------------------------- */

var MajoriteLegaleFR = 18;

function majorite() {
    let age = parseInt( prompt("Quel age as-tu ?  ", "<Saisir votre Age>") );
    if (age > MajoriteLegaleFR) {
        alert ("Je te souhaite la Bienvenue !!!!!!") ;
        document.location.href="http://www.qwant.fr";
    } else { " Merci de de te renseigner sur Google..... " ; 
        document.location.href="http://www.google.fr"; } 
}
majorite();

//