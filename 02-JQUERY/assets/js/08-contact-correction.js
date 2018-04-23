// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Tableau indexé d'objet Contact
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */


/**
 * ***********************
 * FONCTION ajouterContact
 * ***********************
 */
    /**
     * Après vérification des informations, la fonction permet
     * d'ajouter un Contact dans notre "CollectionDeContacts",
     * réinitialiser le formulaire et déclencher une notification.
     * @param {*} Contact 
     */
    function ajouterContact(Contact) {

        // -- Ajouter "Contact" dans "CollectionDeContacts"


            console.log (CollectionDeContacts)
            


        // -- On cache la phrase : Aucun Contact.

        // -- Mise à jour du HTML

        // -- Réinitialisation du Formulaire

        // -- Affiche une Notification (BONUS)

    }

/**
 * *************************************
 * FONCTION reinitialisationDuFormulaire
 * *************************************
 */
    /**
     * Réinitialise les champs du Formulaire
     * reset() du Formulaire.
     */
    function reinitialisationDuFormulaire() { }

/**
 * **********************
 * FONCTION validateEmail
 * **********************
 */    

    /**
     * Vérifie que l'email respecte
     * bien le bon format.
     * @param {*} email 
     */


     function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return emailReg.test(email);
    }
    
    /**
     * Vérifie que le numéro de téléphone
     * respecte le format Français
     * @param {*} tel 
     */
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    /**
     * Vérifie si un Contact est présent
     * dans le tableau JS "CollectionDeContacts"
     * @param {*} Contact 
     */
  
/**
 * ****************************
 * FONCTION unContactEstPresent
 * ****************************
 */
    function unContactEstPresent(Contact) { 
        // -- Booleen qui indique la présence d'un contact dans ma collection
        let ContactEstPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance
        for (let i = 0 ; i < CollectionDeContacts.length ; i++) {

            if ( CollectionDeContacts[i].email === Contact.email ) {
                // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                ContactEstPresent = true;
                // -- On arrête la boucle, plus besoin de poursuivre.
                break;
            }
        }
        // -- On retourne le booleen
        return ContactEstPresent;
    }

    /* 
    --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- 
    */

    // -- Détection de la soumission de mon formulaire
    $('#contact').on('submit', function(e) {
    

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        const nom    = $('#nom');
        const prenom = $('#prenom');
        const email  = $('#email');
        const tel    = $('#tel');
       
        console.log(LesContacts);
            // Création d'un booleen
            let MonFormulaireEstValide = true;

        // -- Vérification des informations
        // -- *****************************

            // -- Vérification du Prénom
            // --------------------------
            
            if (prenom.val.length === 0) { 
               MonFormulaireEstValide = false;
            }

            // -- Vérification du Nom
            // --------------------------
            
            if (nom.val.length === 0) { 
                MonFormulaireEstValide = false;
             }
 

            // -- Vérification du Mail --
            // --------------------------
            // "!" signifie different de 
           
            /** Si n'est pas valide (!), mon mail,
             *  alors mon formulaire
             *  est valide.
             */  

            if (!validateEmail(email.val())) {
                MonFormulaireEstValide = false;
            }
    
            // -- Vérification du Tel --
            // -------------------------
            
            // "!" signifie different de 
            /** Si n'est pas valide (!), mon numéro de
             *  téléphone, alors mon formulaire
             *  est valide.
             */
            if (!validateTel(tel.val())) {
                MonFormulaireEstValide = false;
            }

        // -- Si toutes mes informations sont valides
            if (MonFormulaireEstValide) {
            
            // -- Tout est correct
            let Contact = {
                // cle         : valeur
                   nom         : nom.val(),
                   prenom      : prenom.val(),
                   email       : email.val(),
                   tel         : tel.val()
               };
            } 
            
            if (ContactEstPresent(Contact) ) {
                alert('ATTENTION\nVeuillez bien remplir tous les champs.');
            }

            else { 
               ajouterContact(Contact);

            }
            /**
             * Si le contact est présent dans la collection, on informe l'utilisateur
             * Sinon, on peut procéder à la suite du traitement.
             */

            }; // -- Fin de $.submit()

    }); // -- Fin de 
}