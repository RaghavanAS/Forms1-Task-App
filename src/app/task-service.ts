import { Injectable } from '@angular/core';
import { TaskModel } from './model/TaskModel';

@Injectable()
export class TaskService {

  private TasksList: TaskModel[]= [];

  constructor() { }
/** Add movie in the array List. */
addTask(taskDetail: TaskModel) {
  this.TasksList.unshift(taskDetail);
}

/**Get the movie list from the array. */
getTaskList(): TaskModel[] {
  return this.TasksList;
}
}
