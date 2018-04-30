import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector:    'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: [ './ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter ();
  nouveauContact: Contact = new Contact ();
  active = true;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Fonction appelée après le
   * la soumission du formulaire
   * */
  submitContact() {
/**
 * Lorsque mon formulaire est soumis, j'émet un
 * évènement qui sera écouté par ma application,
 * et qui récupérera les données du nouveau contact.
 * */
    this.unContactEstCree.emit( {leContact: this.nouveauContact});

// -- Rénitialiser le Nouveau Contact :
    this.nouveauContact= new Contact();
// -- Réinitialiser du Formulaire :
    this.active = false;
    setTimeout( () => this.active = true, 0 );
  }
}

