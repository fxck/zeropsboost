import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo, TodoBase } from './todos.models';

@Injectable({ providedIn: 'root' })
export class TodosApi {

  private _apiEndpoint = `${environment.apiUrl}/todos`;

  getAll$() {
    return this._http.get<Todo[]>(`${this._apiEndpoint}`);
  }

  add$(data: TodoBase) {
    return this._http.post<Todo>(`${this._apiEndpoint}`, { data });
  }

  update$(id: number, data: Partial<TodoBase>) {
    return this._http.patch<Partial<Todo>>(`${this._apiEndpoint}/${id}`, { data });
  }

  delete$(id: number) {
    return this._http.delete<Partial<Todo>>(`${this._apiEndpoint}/${id}`);
  }

  constructor(private _http: HttpClient) { }

}
