/* ----------------------------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.
Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------------------------------------------------------------------

*/

// -- BASE DE DONNEES
var email, mdp, login, passw;

email = "wf3@hl-media.fr";
mdp = "wf3";

function acces() {
// demander l'email
    let login = prompt("Login :  ", "<Saisir votre Email>") ;

// demander le mdp
    let passw = prompt("Mot de Passe :  ", "<Saisir votre Mot de Passe>") ;

// verifier que le la concordance des variables
if ( login === email && passw === mdp  )
    alert("Bienvenue sur notre Site...")    ;


else alert("Mauvaise Combinaison Login / Mot de Passe") ;
document.location.href="http://www.google.fr";

}
acces()



// // -- BASE DE DONNEES
// var email, mdp, login, passw;

// email = "wf3@hl-media.fr";
// mdp = "wf3";

// function acces() {
// // demander l'email
//     let login = prompt("Login :  ", "<Saisir votre Email>") ;

// // demander le mdp
//     let passw = prompt("Mot de Passe :  ", "<Saisir votre Mot de Passe>") ;

// // verifier que le la concordance des variables


// /* Retourne VRAI si majeur.
// * FAUX sinon.
// * @param {Number} age 
// */

// function correct(age) {
//    if(login == email && mdp == passw) {
//        return true;
//    } else {
//        return false;
//    }
// }

// // -- 3. Je demande à l'utilisateur son age
// var login = parseInt(prompt("Login ?","<Login>"));
// var passw = parseInt(prompt("Mot de Passe ?","<passw>"));


// // -- 4. Vérification de l'age du visiteur....
// if( estMajeur(ageSaisieParMonUtilisateur) ) {

//    // -- 4a. J'affiche un message de bienvenue
//    alert('Bienvenue sur mon site internet réservé aux majeurs...');
//    document.write("0_0 !!!");

// } else {
   
//    // -- 4b. J'effectue une redirection
//    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

// }