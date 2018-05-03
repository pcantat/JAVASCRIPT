import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  /** La Tache a creer de @type (task) */
  task: Task = new Task();

  /** permet d'éméttre un évènement lors
   * de la création d'une tâche.
   * @type (EventEmitter <any>
   */
  @Output() newTaskEvent = new EventEmitter();

  /**
   * Réinitialisation du formulaire
   * @type (boolean)
   * */
  active = true;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Fonction appelée lors
   * de la création d'une tâche.
   * (Submit du Formulaire)
   * */

  addTask() {
    // console.log(this.task);
    /** Lorsque l'utilisateur soumet le
     * formulaire, j'émet l'événement
     * avec la nouvelle tâche.
     * */
    this.newTaskEvent.emit({task: this.task});

    /** Réinitialisation de la tâche */
    this.task = new Task();

    /** Réinitialisation du Formulaire */
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
