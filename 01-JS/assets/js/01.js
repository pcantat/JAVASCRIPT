// alert('WOW ! Tu es toujours avec Moi !!!');
// Deux Slash pour faire un commentaire uniligne

/* 
Ici, Je peux faire un commmentaire sur plusieurs lignes

Raccourcis :

CTRL + /
ou
ALT + SHIFT + A
*/


// -- 1. Déclarer une variable en JS
var Prenom;

// -- 2. Affecter une valeur
Prenom="Pascal";

// -- 3. Afficher la valeur de ma vaiable dans la console
console.log(Prenom);

/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
---------------------------------------------------*/

// Ici type permet de connaitre le type de variable
// console.log(typeof Prenom);

// Même chose avec l'Age

var Age;
Age="49";
console.log(Age);
console.log(typeof Age);


/*
|-------------------------------------------------- 
| ~ ~ ~ ~ ~   LA PORTEE DES VARIABLES   ~ ~ ~ ~ ~ ~ |
| Les variables déclarées directement à la racine   |
| du fichier JS sont appelées variables GLOBALES.   |
| Elles sont disponibles dans l'ensemble de votre   |
| document, y compris dans les fonctions.           |
|                                                   |
| ###                                               |
|                                                   |
| Les variables déclarées à l'intéreiur d'une       |
| fonction sont appelées variables LOCALES.         |
|                                                   |
| Elles sont disponibles uniquement dans le         |
| contexte de la fonction, ou du bloc qui les       |
| contients.                                        |
|                                                   |
| ###                                               |
|                                                   |
| Depuis ECMA 6, vous pouvez déclarer une variable  |
| avec le mot-clé "let".                            |
|                                                   |
| Votre variable sera alors accessible uniquement   |
| dans le bloc dans lequel elle est contenue.       |
|                                                   |
| Si elle est déclaré dans une condition elle       |
| disponible uniquement dans le bloc de la          |
| condition.                                        |
|                                                   |
|                                                   |
|---------------------------------------------------|
*/

//Les variables FLOAT
var uneDecimale = -2.897;
console.log(uneDecimale);
console.log(typeof uneDecimale);


// Les Booléens Vrai / Faux
var unBooleen = false; // ou TRUE
console.log(unBooleen);
console.log(typeof unBooleen);

// Les Constantes

/**
 * 
 * La déclaration CONST permet de crééer une constante accessible uniquement en lecture. 
 * Sa valeur ne pourra pas être modifiée par des réacffectations ultérieures.
 * Une constante ne peut pas être déclarée à nouveau.
 * 
 * Généralement, par convention, les constantes sont en majuscules.
 * 
 * Depuis ECMA 6, on recommande l'utilisation des constantes plutôt que VAR ou LET
 * s'il n'y aura pas de modification de valeur à votre variable. 
 * 
 */

 const HOST = "localhost"
 const USER =  " root"
 const PASSWORD = "mysql"

 // je ne peux pas faire ça :

//  USER = "Pascal"
// Message d'erreur : Uncaught SyntaxError: Identifier 'USER' has already been declared
// ni ça :
// const USER = "Pascal"
// Message d'erreur : Uncaught SyntaxError: Unexpected identifier


/*
|----------------------------------------------------------|
| ~ ~ ~ ~ ~ ~ ~ ~ ~   LA MINUTE INFO   ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ |
|----------------------------------------------------------|
|                                                          |
|                                                          |
| Au fur et à mesure que l'on affecte ou réaffecte         |
| des valeurs à une variable, celle-ci prend la nouvelle   |
| valeur et son type                                       |
|                                                          |
| En Javascript ECMA Script; les variables sont auto-typées|
|                                                          |
| Pour Convertir une variable de type NUMBER en STRING     |
| et vis versa je peux utiliser les fonctions natives      |
| de javascript                                            |
|                                                          |
|----------------------------------------------------------|
*/

var unNombre = "24";
console.log(unNombre);

/**
 * La Fonction parseInt() pour retourner
 * Un Entier à partir de mon string.
 */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je réaffecte une valeur à ma variable
unNombre = "12.55";

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//-- Convertion d'un nombre en Sting avec toString()

unNombre = 10
var monNomNombreEnString = unNombre.toString();
console.log(unNombre);
console.log(monNomNombreEnString);


