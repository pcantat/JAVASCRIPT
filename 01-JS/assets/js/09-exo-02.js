/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****


II. ²Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 


*/

// 1--  Faire le tableau 3d

// var PremierTrimestre = [

// [Hugo_LIEGEARD =    [ Francais, Mathh, Physique ] ]
// [Eleve_01 =         [ Francais, Mathh, Physique ] ]
// [Eleve_02 =         [ Francais, Mathh, Physique ] ]

// ]


// var PremierTrimestre = [eleve, matiere, note] 

// var eleve   =   [Hugo_LIEGEARD, Eleve_01, Eleve_02,Eleve_03, Eleve_04]
// var matiere =   [Francais, Mathh, Physique, Anglais, Info]
// var note    =   [eleve[], matiere[] ]

// var moy     =   [   ]


var PremierTrimestre = [
    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        matiere : {
            francais    : 4,
            math        : 7,
            physique    : 4,
            gestinfq    : 18,
            musique     : 19
        }
    },
    {
        prenom  : "Salim",
        nom     : "SOUMARE",
        matiere : {
            francais    : 4,
            math        : 12,
            physique    : 10,
            anglais     : 15
        }
    },
    {
        prenom  : "Rachma",
        nom     : "SALIM",
        matiere : {
            francais    : 12,
            math        : 11,
            anglais     : 16,
            espagnol    : 16,
            philo       : 14
        }
    },
    {
        prenom  : "Ousmane",
        nom     : "MAMA",
        matiere : {
            francais    : 8,
            math        : 13,
            anglais     : 16,
            espagnol    : 16,
            philo       : 6
        }
    },
    {
        prenom  : "Cheffia",
        nom     : "BENALLAL",
        matiere : {
            francais    : 12,
            math        : 11,
            anglais     : 13,
            allemand    : 12,
            latin       : 10
        }
    },
];


// Boucle permettant l'affichage de chaque etudiant

var nm=0;


while ( nm <= mn.length ) {
    document.write ( prenom[nm] + '  ' + nom[nm] + '<p> Ta Moyenne est de </p>'  )
    nm++;
}








function moyenne(tableau)
{
        var n = tableau.length;   // nombre de valeurs
        var somme = 0;
        for(i=0; i<n; i++)
                somme += tableau[i];
        return somme/n;   // somme divisee par le nombre de valeurs
}





// n = 0
// while ( n < matiere.lenght) var m=  )
// moyenne = 
// document.write ( prenom[n], + ' ' + nom[n] + ' ' + moyenne[n])
   
   
//     moyenne [ while ( n < moyenne.lenght) ] ] )


