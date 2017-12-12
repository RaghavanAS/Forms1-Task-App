import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DateFunction } from '../Date-Data';

import { TaskModel } from '../model/TaskModel';
import { TaskService } from '../task-service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  providers: [TaskService]
})
export class TaskFormComponent implements OnInit {

  taskModel: TaskModel;
  tasksList: TaskModel[] = [];
  taskDetail: TaskModel;
  private _Description: string;

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  this.setTaskModel();
  this.tasksList = this._taskService.getTaskList();
  }

  setTaskModel() {
    /* Define Default values */
    return this.taskModel = {
      TaskTitle: '',
      Description: '',
      Completion_Date: new DateFunction().getCurrentDate()
    };
  }

  /* Add a Movie */
  addMovies(values) {
    console.log(values.Description);
    if (values.Description === '' || values.Description === undefined ) {
      this._Description = 'N/A';
     } else {
    this._Description = values.Description;
    }
    this.taskModel = {
      TaskTitle: values.TaskTitle,
      Description: this._Description,
      Completion_Date: values.Completion_Date
    };
    this._taskService.addTask(this.taskModel);
    this._taskService.getTaskList();
    console.log(this.tasksList);
    this.taskModel = new TaskModel();
  }
}
