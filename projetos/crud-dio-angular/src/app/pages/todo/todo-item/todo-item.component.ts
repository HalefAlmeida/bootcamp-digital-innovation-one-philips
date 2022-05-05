import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'dio-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  /**
   * Remove um todo da listagem
   */
  removeTodo(): void {
    this.remove.emit(this.todo);
  }

  /**
   * altera o status de um Todo
   */
  markAsDone(): void {
    this.todo.done = !this.todo.done;
    this.done.emit(this.todo);
  }
}
