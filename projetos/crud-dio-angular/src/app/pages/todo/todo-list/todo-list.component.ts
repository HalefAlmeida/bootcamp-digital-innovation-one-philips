import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'dio-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() {}

  ngOnInit(): void {
    let itens: any = localStorage.getItem('todos');
    let todos: any = JSON.parse(itens);

    if (!todos) {
      this.todos = [];
    } else {
      this.todos = todos;
    }
  }

  addTodo(text: string) {
    const id = this.todos.length + 1;
    this.todos.push({ id: id, text: text, done: false });

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: any) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  doneTodo(todo: any) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
