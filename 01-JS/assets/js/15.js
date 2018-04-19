    /*--------------------------------------------------\
    |                                                   |
    |                 LES EVENEMENTS                    |
    |               ~ LES EVENEMENTS 😈🤕 ~            |
    |                                                   |
    |                                                   |
    \--------------------------------------------------*/

/** 
 * 
 * Les évênements vont me permettre de déclencher une fonction
 * c'est à dire une série d'instructions ;
 * Suite à une action de mon utilisateur....
 * 
 * OBJECTIF :   Etre en mesure de capturer ces événments
 * afin d'éxecuter une fonction.
 * 
 * Les évênements : MOUSE (souris)
 *      click       : au clic sur un élément
 *      mouseenter  : la souris passe au dessus de la zone d'un élément
 *      mouseleave  : la souris sort de cette zone.
 * 
 * Les évênements : KEYBOARD (Clavier)
 *      keydown     : une touche du clavier est enfoncée ;
 *      keyup       : une touche du clavier & été relachée ;
 * 
 * Les évênements : WINDOW (Fenêtre)
 *      scroll      : défilement de la fenêtre ;
 *      resize      : redimmentionnement de la fenêtre ;
 * 
 * Les évênements : FORM (Formulaire)
 *      change      : pour les éléments <input>, <select> et <textaera>;
 *      submit      : à l'envoi (soumission) du formulaire;
 *      input       : pour capter la saisie d'un utilisateur sur un champ <input>;
 * 
 * 
 * ################# LES ECOUTEURS D'EVENMENTS #################
 * 
 * Pour attacher un évênement à un élément, ou autrement dit, 
 * pour déclarer un écouteur d'évênement qui se chargera de 
 * déclencher une fonction, je vais utiliser la syntaxe suivante :
 * 
 * #############################################################
 * 
 */

var p = document.getElementById('MonParagraphe');

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris

function changerLaCouleurEnRouge() {
    p.style.color = "red";
    // p.style.fontStyle = "bold";
}

p.addEventListener('click', changerLaCouleurEnRouge);

/*______________________________________________________________
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique.                                                 |
| Affichez ensuite dans une alerte, la saisie de l'utilisateur. |
|                                                               |
|______________________________________________________________*/

// Correction

//-- Création du champ input
var input = document.createElement('input');

// Attribution d'un Attribut
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisie du Contenu...');

// Attibution d'un ID
input.id = "MonID";

// Ajout dans la page
document.body.appendChild(input);

function VoirLaSaisiedeMonInput() {
    console.log (input.value);
    alert(input.value);
}
input.addEventListener ('change', VoirLaSaisiedeMonInput);
