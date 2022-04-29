import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('todo')
  getTodo() {
    return 'ahoj';
  }

  @Post('hello')
  addNewTodo() {
    return 'ahoj';
  }

  @Delete('hello')
  deleteTodo() {
    return 'ahoj';
  }
}
