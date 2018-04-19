// -- Déclaration d'un tableau indexé.
// * Deux méthodes :

var monTableau = [];
var myArray    = new Array;

monTableau [0] = "Rahma";
monTableau [1] = "Freddy";
monTableau [2] = "Ousmane";

//--- Affiche les Données
console.log(monTableau);

//-- Affiche Freddy ou l'index 1
console.log(monTableau[1]);

var NosPrenoms = ["Salim", "Greg", "Cheffia", "Glenn", "Julien"];
console.log(NosPrenoms);


//------------------------
//------LES OBJETS--------
//------------------------


//-- Déclaration ET AFFECTATION des valeurs à un Objet
//--     PAS DE TABLEAUX ASSOCIATIF EN JAVASCRIPT

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGARD",
    age    : 82
};

console.clear();
console.log(Coordonnee);
console.log(Coordonnee['prenom']);  // Ces deux lignes donnent le même résultat
console.log(Coordonnee.prenom);     // Ces deux lignes donnent le même résultat
console.log(Coordonnee.nom);


//-- Je vais créer 2 tableaux indexés

var ListeDePrenoms = ["Ousmane", "Cheffia", "Hugo"];
var ListeDeNoms    = ["MAMA", "BENALLAL", "LIEGARD"];

var Annuaire       = [ ListeDePrenoms, ListeDeNoms];

console.log(Annuaire);
document.write ( Annuaire[0][1]);
document.write ( ' ' );
document.write ( Annuaire[1][1]);
document.write ( ' ' );
document.write ( ' ' );
document.write ( ' ' );
document.write ( ' ' );

    /* -------------------------------------------------\
    |                    EXERCICE :-)                   |   
    |   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
    |   Créez un Tableau à 2 dimensions appelé          |
    |   "AnnuaireDesStagiaires" qui contiendra          |
    |   toutes les coordoonnées pour chaque stagiaire.  |
    |                                                   |
    |   Ex. Nom, Prénom, Tel                            |
    \------------------------------------------------- */



// var ListeDePrenoms  = ["Ousmane", "Cheffia", "Hugo"];
// var ListeDeNoms     = ["MAMA", "BENALLAL", "LIEGARD"];
var ListeDeTel      = [ "Tel1", "Tel2", "Tel3" ]
// var Annuaire       = [ ListeDePrenoms, ListeDeNoms];

var AnnuaireDesStagiaires =  [Annuaire, ListeDeTel];

// console.log( AnnuaireDesStagiaires );

// document.write ( AnnuaireDesStagiaires[0][0] + ListeDeTel[0][0] );

// Correction de l'Exercice :

var AnnuaireDesStagiaires = [
    { prenom : "Hugo", nom : "LIEGEARD", tel : "07 83 97 15 15" },    
    { prenom : "Salim", nom : "SOUMARE", tel : "XX XX XX XX XX" },
    { prenom : "Pransun", nom : "BALASUBRAMANIAM", tel : "XX XX XX XX XX" },
];

console.log(AnnuaireDesStagiaires);

// -- Exemple 3D

var Contacts = [

    {
        prenom      :   "Hugo",
        nom         :   "LIEGEARD",
        coordonnees :   {
            email   :   "wf3@hl-media.fr",
            tel     :   {
                fixe    :   "0596 108 328",
                fax     :   "0596 108 632",
                port    :   {
                    prive   :   "07 83 97 10 15",
                    pro     :   "07 83 97 15 15"
                }
            },
            adresse :  {
                ville   :   "Ducos",
                cp      :   "97224",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Rodrigue",
        nom         :   "NOUEL",
        coordonnees :   {
            email   :   "rodrigue.nouel@hl-media.fr",
            tel     :   {
                fixe    :   "0596 56 78 89",
                fax     :   "0596 32 15 22",
                port    :   {
                    prive   :   "0696 78 89 56",
                    pro     :   "0696 89 23 45"
                }
            },
            adresse :  {
                ville   :   "Fort-de-France",
                cp      :   "97200",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Gregory",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "greg.dhaem@hl-media.fr",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "les Mesnuls",
                cp      :   "78490",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Pascal",
        nom         :   "Cantat",
        coordonnees :   {
            email   :   "pcantat@hl-media.fr",
            tel     :   {
                fixe    :   "0675 82 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 26 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "Thoiry",
                cp      :   "78770",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);
console.log(Contacts[3].coordonnees.email);

console.log(Contacts[1].coordonnees.adresse.pays.code);
console.log(Contacts[3].coordonnees.adresse.ville);

    /* -------------------------------------------------\
    |                                                   |   
    |                 Ajouter un élément                |
    |                                                   |
    \------------------------------------------------- */

var Couleurs = ['Rouge', 'Jaune', 'Vert'];

/**
 * Si Je Souhaite ajouter un élément dans mon tableau.
 * Je fais apell à la fonction push() qui me renvoie 
 * le nombre d'éléments.
 */

console.clear();
console.log(Couleurs);
console.log(Couleurs.length);
console.log(Couleurs);
var nbElementsDeMonTableau = Couleurs.push('Orange');
console.log(Couleurs);
console.log(nbElementsDeMonTableau);

/**
 * NB : La fonction  unshift() permet d'ajouter un ou 
 * plusieurs éléments au début de mon tableau
 * et d'en récupérer la valeur. 
 * Je peux accessoirement récupérer cette valeur dans 
 * une variable.
 * 
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift
 */

    /* -------------------------------------------------\
    |                                                   |
    |     RECUPERER ET SORTIR LE DERNIER ELEMENT        |
    |                                                   |
    \------------------------------------------------- */


/**
* La fonction pop() me permet de supprimer un ou 
* plusieurs éléments de mon tableau et d'en
* récupérer la valeur.
* Je peux accessoirement récupérer cette valeur 
* dans une variable.
*/

var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log[monDerneirElement];

/**
 * La même chose est possible avec le permier élément en utilisant
 * la fonction shift.
 * ------
 * NB: La fonction splice() vous permet de sortir un ou plusieurs
 * éléments de votre tableau.
 * 
 * A voir ce WE fonctions boucles et conditions
 */