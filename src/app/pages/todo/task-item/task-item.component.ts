import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/todo';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem: ITask = {
    id: 0,
    title: '',
    done: false,
  };

  @Output() removeItem = new EventEmitter;

  done = false;

  constructor() { }

  ngOnInit(): void {

  }

  deleteTask(): void {
    this.removeItem.emit(this.taskItem);
  }

  checked(): void {
    this.done = true;
  }

}
