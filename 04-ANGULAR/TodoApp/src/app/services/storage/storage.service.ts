import {Injectable} from '@angular/core';
import {Task} from '../../models/task';

@Injectable()
export class StorageService {

  constructor() {
  }

  /**
   * Permet de Sauvegarder les Tâches
   * dans le localStorage.
   * */
  save(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * Retourne une liste de tâches
   * depuis le localStorage. Ou,
   * un tableau vide.
   * */
  getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks !== null) {
      return tasks;
    } else {
      return [];
    }
  }
}
