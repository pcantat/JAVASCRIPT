/* --
    CONSIGNE : A partir du tableau fourni, 

    vous devez mettre en place un système d'authentification. 
    
    Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, 
    
    et après avoir vérifié ses informations, 
    
    vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'},
    {'prenom':'p','nom':'c','email':'pc@wf3.fr','mdp':'toto'}
];
        

function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

var NombreD_Eleves = BaseDeDonnees.length;

function acces() {
    // demander l'email
        let login = prompt("Login :  ", "<Saisir votre Email>") ;
    
    // demander le mdp
        let passw = prompt("Mot de Passe :  ", "<Saisir votre Mot de Passe>") ;
    
    for (let i=0 ; i < NombreD_Eleves; i++) {
        BaseDeDonnees[i].email !== login
        return true; 
            BaseDeDonnees[i].mdp === passw ;
            break;
    }
    console.log('Bienvenue.........')


    }

acces()