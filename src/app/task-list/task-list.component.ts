import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskModel } from '../model/TaskModel';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() taskDetail: TaskModel[];
  constructor() { }

  ngOnInit() {
  }

}
