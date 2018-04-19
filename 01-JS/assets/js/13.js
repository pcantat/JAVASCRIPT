    /*--------------------------------------------------\
    |                                                   |
    |                       LE DOM                      |
    |                                                   |
    \--------------------------------------------------*/


    /** Le DOM  est une interface de développement en JS pour HTML.
     * Gràce au DOM, je vais pouvoir être en mesure d'accéder ou modifier mon HTML.
     * 
     * L'Objet "document" : C'est le point d'entrée vers mon contenu HTML.
     * 
     * Chaque page chargée dans mon navigateur a un objet "document" .
     * 
    */

/** -----------------------------------------------------------------------------
 * 
 * Comment puis-je faire pour récupérer
 * les differentes informations de ma page HTML
 * 
 *  -----------------------------------------------------------------------------
 */
 
 /** -----------------------------------------------------------------------------
  * 
 * La premiere solution : document.getElementById()
 * 
 * document.getElementById() est une fonction qui va permettre de récupérer 
 * un élépment HTML à partir de son identifiant unique ID.
 * 
 *  -----------------------------------------------------------------------------
 */

var bonjour= document.getElementById ('bonjour');
console.log(bonjour);

 /** -----------------------------------------------------------------------------
  * 
 * La deuxieme solution : document.getElementsByClassName()
 * 
 * document.getElementsByClassName() est une fonction qui va permettre de récupérer 
 * un ou plusieurs éléments (une liste) HTML à partir de leur classe.
 * 
 *   -----------------------------------------------------------------------------
 */ 


var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// -- /!\ Me renvoi un tableau JS avec les éléments HTML (Collection HTML)  /!\


 /** -----------------------------------------------------------------------------
  * 
 * La troisieme solution : document.getElementsByTagName()
 * 
 * document.getElementsByTagName() est une fonction qui va permettre de récupérer 
 * un ou plusieurs éléments (une liste) HTML à partir de leur "Nom de Balise".
 * 
 *   -----------------------------------------------------------------------------
 */ 

 var span = document.getElementsByTagName('span');
 console.log(span);