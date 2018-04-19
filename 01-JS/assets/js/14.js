/** ==============================================
 *                                                  *
 *          LA MANIPULATIONS DES CONTENUS           *
 *                                                  *
 *  ==============================================
 */

//  fonction l(e) {
//     console.log(e)

//  }

 
// function l(e) {
//     console.log(e)
// }
// Nouvelle Syntaxe ECMA 6 avec les fonctions fléchées
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

l = e => console.log(e);

// -- Je souhaite récupérer mon lien google ; Comment procéder ?

var google = document.getElementById('google');
l(google);

// -- Maintenant je souhaite accéder aux informations de ce lien.....

// -- a : Le lien vers lequel pointe la balise
l(google.href);

//-- b : l'ID de la Balise
l(google.id);

//-- c : la classe de la Balise
l(google.className);

//-- d : Le Texte de la Balise
l(google.textContent);



/** --------------------------------------------------------------
//  Maintenant, je souhaite modifier le contenu de mon lien !!
//  Comme une variable classique, je vais simplement venir 
//  affecter une nouvelle valeur à mon "text.Content"
// --------------------------------------------------------------
*/
google.textContent = "Mon Lien vers GooooOOOOooogle !!!!!!"



/**
 * ========================================================
 * 
 *        COMMENT AJOUTER UN ELEMENT DANS MA PAGE ????
 * 
 * ========================================================
 **/

/** 
 * 
 * Nous allons utiliser deux étapes :
 * 
 * 1. === la fonction document.createElement() va permettre de 
 * générer un nouvel élément dans le DOM; que je pourrais 
 * modifier par la suite avec les méthodes que nous venons de voir.
 * 
 * */


// -- Définition de l'élément :
var span = document.createElement('span');

// -- Si je souhaite lui donner un Id :
span.id = "MonSpan";

// -- Lui attribuer du contenu :
span.textContent = "Mon Texte en JS !!!!";

// -- Comment lui ajouter l'élément dans la page ?
google.appendChild(span);


/* 
----------------------------------------------------------------------------------
* EXERCICE :
*    En partant du travail déjà réalisé sur la page.
*    Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
*    "Titre de mon Article".
*    Dans cette balise, vous créerez un lien vers une url de votre choix.
*    BONUS : Ce lien sera de couleur Rouge et non souligné.
*
*           <<h1>  <a> TITRE </a>  </h1>
*
----------------------------------------------------------------------------------
*/

// -- Création de l'élément h1
var h1 = document.createElement('h1');

// -- Création de l'élément a
var a = document.createElement('a');

// -- Titre de l'Article
a.textContent = "Titre de mon Article";

// -- Je donne mon lien à mon lien
a.href = "#";

// -- Je donne mon lien a, dans mon h1
h1.appendChild(a);

// -- Je met met h1 dans la page
document.body.appendChild(h1);

// -- Je veux que mon lien soit de couleur Rouge
a.style.color = "red";

// -- Je veux que mon lien ne soit pas souligé
a.style.textDecoration = "none";

