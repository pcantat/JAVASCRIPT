    /*--------------------------------------------------\
    |                                                   |
    |                LES FONCTIONS                      |
    |                                                   |
    \--------------------------------------------------*/


/** Déclarer une fonction :
 * nb : Cette fonction ne retourne 
 * aucune valeur et ne prends pas de paramètres.
 */

    function Bonjour() {
        // ---
        // ---
        alert('Bonjour !!!');
        // ---
        // ---
    }

    /** Je vais executer ma fonction "Bonjour"
     * et déclencher ses instructions.
     */

     Bonjour();

//************************************ */


/** Déclarer une fonction qui prends des 
 *  Variables en paramètres.
@param {string} Prenom
@param {string} Nom
*/

     function ditBonjour(Prenom, Nom) {
        document.write( "<p> Bonjour <strong>" + Prenom + " " + Nom + " </strong> ! </p>" )};

/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */

// @param {number}  nb1=20;
// @param {number}  nb2=30;


function somme( nb1, nb2 ) { return nb1+nb2 };
document.write( "<p>" + somme(20, 30) + "</p>");


/* ===================*/

/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */
// voir fichier 07-exercice.js et le fichier 07-exercice-correction.js

