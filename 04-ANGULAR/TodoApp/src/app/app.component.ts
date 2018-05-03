import {Component, OnInit} from '@angular/core';
import {Task} from 'protractor/built/taskScheduler';
import {StorageService} from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private storage: StorageService) {
  }

  // --  Notre Tableau de Tâches
  tasks: Task[] = [];

  /**
   * Cette Fonction se déclenche dans
   * l'application lorsqu'une nouvelle
   * tâche est créée par l'utilisateur
   * dans le composant app-add
   * @param $event
   * */

  newTask(newTaskEvent: any) {
    /**
     * On ajoute la nouvelle tâche dans le tableau de tâches.
     * Puis on sauvegarde dans le localStorage
     * */
    this.tasks.push(newTaskEvent.task);
    // console.log(this.tasks);
    this.storage.save(this.tasks);
  }

  ngOnInit(): void {
    /**
     * Au Chargement de l'application je récupère mes tâches dans le LocalStorage
     * */
    this.tasks = this.storage.getTasks();
  }
/**
 * L'utilisateur viens de terminer une tâche @param {Task} task
 * */

  taskIsDone(task: Task) {
    task.status = true;
    this.storage.save(this.tasks);
  }


  /**
   * L'Utilisateur viens supprimer une tâche. On la retire du tableau
   * et On sauvegarde tout !!
   * @param (Task)
   * */
  removeTask(task: Task){
    _.pullAllWith(this.tasks, [task], _.isEqual);
    this.storage.save (this.tasks);
    }
  }
}
