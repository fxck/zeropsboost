import { Controller, Delete, Get, Post } from '@nestjs/common';
import { subMinutes } from 'date-fns';

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

  todos = INITIAL_DATA;

  @Get()
  getTodo() {
    return INITIAL_DATA;
  }

  @Post()
  addNewTodo() {
    return 'ahoj post ';
  }

  @Delete()
  deleteTodo() {
    return 'ahoj detele';
  }

}
