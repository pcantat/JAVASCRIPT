/** Pour déclarer une classe comme composant de notre application, on importe "Component" via @angular/core */

import { Component } from '@angular/core';
import { Contact} from './models/contact';
import {ContactApiService} from './services/contact-api.service';

// class Contact {
  // id: number;
  // name: string;
  // username: string;
  // email: string;
  // address?: object;
  // phone?: number;
  // website?: string;
  // company?: object;
  // }

/**
 * @Component est ce que l'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres essentiels à notre application
 * */
@Component({
  /**
   * Le Selecteur (selector) détermeine la manière dont le composant sera affiché dans notre HTML : <app-root> </app-root>.
   * Vous devez OBLIGATOIREMENT  avoir la balise d'ouverture et de fermeture
   * */
  selector: 'app-root',
  /** "template-url" ou " template" est la partie visible du composant.
   * C'est ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   * */

  template: '<h1>Bienvenue aux Mureaux...</h1>' +
  '<h3> Notre Ville a du Talent !!</h3>',
  styles: ['h1 {color: blue;}'],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * La Classe contient les données du composant, mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe correspond au ViewModel.
 * */
export class AppComponent implements onInit {

  constructor(private contactApiService: ContactApiService) {

  }

// -- Décalaration d'une variable Titre
  title = 'Gestion de mes Contacts';

// -- Contact choisi par l'utilisateur
  contactActif: Contact;

// -- Déclaration d'un objet Contact

  unContact: Contact = {
    id        : 1,
    name      : 'Hugo LIEGEARD',
    username  : 'hugoliegeard',
    email     : 'wf3@hl-media.fr'
  };
  // -- Tableau de Contacts

mesContacts: Contact[] = [
    {
      id        :   1,
      name      : 'Hugo LIEGEARD',
      username  : 'hugoliegeard',
      email     : 'wf3@hl-media.fr'
    },
    {
      id        :   2,
      name      : 'Greg D\'HAEM',
      username  : 'gregdhaem',
      email     : 'greg.d@hl-media.fr'
    },
    {
      id        :   3,
      name      : 'Salim SOUMARE',
      username  : 'salimsoumare',
      email     : 'salim.s@hl-media.fr'
    },
    {
      id        :   4,
      name      : 'Cheffia BENALLAL',
      username  : 'cheffiabennallal',
      email     : 'cheffia.b@hl-media.fr'
    }
  ];

  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
  console.log(this.contactActif);
}

  ajouterContactDansListe(event: any) {
    console.log(event);
// -- Récupération du Contact via l'événement
    const leContact: Contact = event.leContact;

// -- Attribution d'un Id au Contact (leContact)
    leContact.id = Date.now();
    console.log(leContact);

// -- Ajout du Contact dans le Tableau
    this.mesContacts.push(leContact);

  }


  ngOnInit (): void {
    this.contactApiService.getContacts().subscribe(
      next:contacts => (
        console.log(contacts)
    )

    )
  }
}
