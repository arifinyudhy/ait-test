import { COMPLETETASK, INCOMPLETETASK } from './data/data';
import { TaskModel } from './models/task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ait-unit-test';
  value = '';
  array: number[] = [];
  listIncompleteTask: TaskModel[] = [];
  listCompleteTask: TaskModel[] = [];
  task: TaskModel = new TaskModel({});
  ngOnInit(): void {
    this.initialize();
  }
  initialize(){
    this.listCompleteTask = COMPLETETASK;
    this.listIncompleteTask = INCOMPLETETASK;
  }

  onChangeValue() {
    this.task = new TaskModel({});
    this.task.task = this.value;
    this.task.complete = false;
    console.log(this.task);
  }
  addToDo() {
    this.task.id = Math.floor(Math.random() * 100);
    this.listIncompleteTask.push(this.task);
    this.value = '';
  }
  onCompleteTask(id: number) {
    let task = this.listIncompleteTask.find(x => x.id == id);
    let index = -1;
    if (task !== undefined) {
      index = this.listIncompleteTask.indexOf(task);
      this.listIncompleteTask.splice(index, 1);
      task.complete = true;
      this.listCompleteTask.push(task);
    }
  }
  onRemoveCompleteTask(id: number) {
    let task = this.listCompleteTask.find(x => x.id == id);
    let index = -1;
    if (task !== undefined) {
      index = this.listCompleteTask.indexOf(task);
      this.listCompleteTask.splice(index, 1);
      task.complete = false;
      this.listIncompleteTask.push(task);
    }
  }
}
