// CONSIGNE : (test)

// Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
// Considérons un Tableau      JS contenant une liste de membre.

// **************************************************

// ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce 
// aux évènements que celui-ci n'existe pas dans le tableau de membre.

// Si le Pseudo existe dans le tableau Membre, la notification pseudoError 
// doit s'afficher et le bouton "submit" être désactivé.

// A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que 
// l'utilisateur à corriger son Pseudo, alors, le bouton est actif et 
// la notification pseudoError ne s'affiche pas / plus.

// déclaration des variables

var membres = [
    { pseudo :'Hugo',     age : 26,    email :'wf3@hl-media.fr',      mdp :'wf3'},
    { pseudo :'Rodrigue', age : 56,    email :'rodrigue@hl-media.fr', mdp :'roro'},
    { pseudo :'James',    age : 78,    email :'james@hl-media.fr',    mdp :'james8862'},
    { pseudo :'Emilio',   age : 18,    email :'milio@hl-media.fr',    mdp :'milioDu62'}
];    





