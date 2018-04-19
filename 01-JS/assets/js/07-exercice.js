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


var anneecourante = 2018;

var prenom = prompt("Quel est ton prenom ?  ");

var age = prompt("Bonjour " + prenom + ".  " + "   Quel age as-tu ?");

function AnneeDeNaissance(  ){ return anneecourante-age  };

document.write( "<p> Tu es donc né en  " + AnneeDeNaissance(anneecourante,age ) +  " ! </p>");

document.write("    Bonjour " + prenom + "," +  " Tu as " + age + "  !" );


