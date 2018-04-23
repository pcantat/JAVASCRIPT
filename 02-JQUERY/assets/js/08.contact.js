// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Tableau indexé d'objet Contact
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    /**
     * Après vérification des informations, la fonction permet
     * d'ajouter un Contact dans notre "CollectionDeContacts",
     * réinitialiser le formulaire et déclencher une notification.
     * @param {*} Contact 
     */
    function ajouterContact(Contact) {

        // -- Ajouter "Contact" dans "CollectionDeContacts"
        CollectionDeContacts.push(Contact);

        // -- On cache la phrase : Aucun Contact.
        // Ce qui suit permet de cacher la classe 'aucuncontact'
        $('.aucuncontact').hide() ;

        // -- Mise à jour du HTML
        // -- Afficher le Contact qui vient d'être validé
        
        /**
         * -- Deux Méthodes :
         * <td>` + Contact.nom + `</td> 
         * ou
         * <td>${Contact.prenom}</td>
         * cf ci-dessous :
         */
        
        $(`
            <tr>
                <td>` + Contact.nom + `</td> 
                <td>${Contact.prenom}</td>
                <td>${Contact.email}</td>
                <td>${Contact.tel}</td>
            </tr>
        `).appendTo($('#LesContacts > tbody'));


        // -- Réinitialisation du Formulaire
            reinitialisationDuFormulaire()


        // -- Affiche une Notification (BONUS)
        $('.alert-contact').fadeIn().delay(4000).fadeOut();
    }

    /**
     * Réinitialise les champs du Formulaire
     * reset() du Formulaire.
     */
    function reinitialisationDuFormulaire() {
        // document.getElementById('contact').reset(); //-En JS
        $("#contact")[0].reset();
    }

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
    function unContactEstPresent(Contact) { }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon formulaire
    $('#contact').on('submit', function(e) {
    

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        let LesContacts = {
            nom     : nom.value,
            prenom  : prenom.value,
            email   : email.value,
            tel     : tel.value
        };
        console.log(LesContacts);

        // -- Vérification des informations
        

            // -- Vérification du Prénom
            if (prenom.value.length === 0) { 
                prenom.addClass('aucuncontact');
                $("<p class='help-block'>N'oubliez pas de saisir votre nom.</p>").appendTo(nom.parent());
            }

            // -- Vérification du Nom
            if (nom.value.length === 0) { 
                nom.addClass('aucuncontact');
                $("<p class='help-block'>N'oubliez pas de saisir votre nom.</p>").appendTo(nom.parent());
            }

            // -- Vérification du Mail
            function validateEmail(email) {
                var TestEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return TestEmail.test(email);
              }

            // -- Vérification du Tel
            var validateTel = tel => {
                var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
                return telReg.test(tel);
              }

        // -- Si toutes mes informations sont valides
        
        if (!MonFormulaireEstValide) {
            alert('Attention, Veuillez remplir tous les champs !')
            let PlusUn = CollectionDeContacts.length+1
            
            CollectionDeContacts[PlusUn].Contact.prenom  =  prenom.val;
            CollectionDeContacts[PlusUn].Contact.nom     =  nom;
            CollectionDeContacts[PlusUn].Contact.email   =  email;
            CollectionDeContacts[PlusUn].Contact.tel     =  tel;
            
            console.log(CollectionDeContacts[PlusUn]);
        }
        else {

            /**
             * Si le contact est présent dans la collection, on informe l'utilisateur
             * Sinon, on peut procéder à la suite du traitement.
             */

    }) // -- Fin de $.submit()

}) // -- Fin de $()