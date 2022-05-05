import { Component } from '@angular/core';

export interface Todo {
  text: string;
  completed: boolean;
  date: string;
}
const TODOS = [
  {
    text: 'Naučit se Angular',
    completed: true,
    date: new Date(2022, 4, 3).toISOString()
  },
  {
    text: 'Naučit se git',
    completed: false,
    date: new Date(2022, 3, 1).toISOString()
  },
];

@Component({
  selector: 'zeropsboost-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  todos = TODOS;

  addTodo(value: string) {
    const todo = {
      text: value,
      completed: false,
      date: new Date().toISOString()
    };
   this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  updateTodo(index: number, newValue: Todo, keepDate: boolean) {
    const updatedValue = {
      ...newValue,
      date: keepDate ? newValue.date : new Date().toISOString()
    };
    this.todos[index] = updatedValue;
  }

  trackByIndex(index: number) {
    return index;
  }

  setAllToCompleted() {
    this.todos = this.todos.map((itm) => ({ ...itm, completed: true }));
  }

  filterCompletedTodos() {
    this.todos = this.todos.filter((itm) => itm.completed === true);
  }

  showAllTodos() {
    this.todos = TODOS;
  }

}
