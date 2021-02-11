import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoList : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  create(task: any) {
    let todo = { id: new Date(), task: task.value, state: false };
    this.todoList.push(todo);
    task.value = "";
  }

  update(todo: any){
    let taskToUpdate = this.todoList.find(task => task.id == todo.id);
  }

  changeState(todo: any){
    let taskToUpdate = this.todoList.find(task => task.id == todo.id);
    taskToUpdate.state = !taskToUpdate.state;
  }

  delete(id: any){
    let i = this.todoList.findIndex(todo => todo.id == id);
    this.todoList.splice(i, 1);
  }

}