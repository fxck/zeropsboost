import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { subMinutes } from 'date-fns';
import { TodoBase } from './todos.model';
import { TodosService } from './todos.service';

const INITIAL_DATA = [
  {
    id: 1,
    text: 'foo',
    completed: true,
    created: subMinutes(new Date(), 10).toISOString()
  },
  {
    id: 2,
    text: 'bar',
    completed: false,
    created: subMinutes(new Date(), 10).toISOString()
  }
];

@Controller('todos')
export class TodosController {

  @Get()
  getAllTodos() {
    return this._todosService.getAll();
  }

  @Post()
  addNewTodo(
    @Body('data')
    data: TodoBase
  ) {
    return this._todosService.add(data);
  }

  @Patch(':id')
  updateTodo(
    @Param('id', ParseIntPipe)
    id: number,
    @Body('data')
    data: Partial<TodoBase>
  ) {
    return this._todosService.update(id, data);
  }

  @Delete()
  deleteTodo(
    @Param('id')
    id: number
  ) {
    return this._todosService.delete(id);
  }

  constructor(private _todosService: TodosService) {}
}
