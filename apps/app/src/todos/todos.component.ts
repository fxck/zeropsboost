import { Component } from '@angular/core';

@Component({
  selector: 'zeropsboost-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  todos = ['nauč se angular','oprav zerops'];

  addTodo(value: string) {
    this.todos.push(value);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  updateTodo(index: number, newValue: string) {
    console.log(index, newValue);
    this.todos[index] = newValue;
  }

}
