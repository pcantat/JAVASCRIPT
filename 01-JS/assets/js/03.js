    /* -------------------------------------------------\
    |                                                   |
    |     LA CONCATENATION                              |
    |                                                   |
    \------------------------------------------------- */


/**
 * 
 * Aujourd'hui 16/04/2018, sont présents 
 * 12 apprenants.
 */


var DebutDePhrase   = "Aujourdh'hui ";
var DateDuJour      = new Date();
var SuiteDePhrase   = ", sont présents : ";
var NbAprenants     = 12;
var FinDePhrase     = " apprenants. <br>";


/**
 * Nous souhaitons maintenant, grâce à la 
 * concatenantion, afficher tout ce petit monde
 * en un seul morceau.
 *   
 */

 document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NbAprenants + FinDePhrase);


/* ----------------------------------------------------------
  EXERCICE :
  Créez une concaténation à partir des éléments suivants :  
---------------------------------------------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "Pascal et j'ai ";
var age     = 49;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);
    
