import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Array<ITask> = [];
  taskitem: ITask = {
    id: 0,
    title: '',
    done: false,
  };

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('tasks');
    let localTasks: any = JSON.parse(items);
    if (!localTasks) {
      this.tasks = [];
    } else {
      this.tasks = localTasks;
    }
  }

  addTask(text: string) {
    const id = this.tasks.length + 1;
    this.tasks.push({
      id: id,
      title: text,
      done: false,
    })
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(taskItem: any) {
    let index = this.tasks.indexOf(taskItem);
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
