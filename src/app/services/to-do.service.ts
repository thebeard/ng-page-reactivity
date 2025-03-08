import { inject, Injectable } from '@angular/core';
import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { SortByParameter } from '../models/sort-by-parameter';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private readonly httpService = inject(HttpClient);

  getTodos$(perPage = 15): Observable<Todo[]> {
    return this.httpService
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((todos) => todos.slice(0, perPage)));
  }

  getTodosHttpResource(perPage = 15): HttpResourceRef<Todo[]> {
    return httpResource<Todo[]>(() => 'https://jsonplaceholder.typicode.com/todos', {
      defaultValue: [],
      parse: (todos) => (todos as Todo[]).slice(0, perPage),
    });
  }

  /**
   * We define a sorting function to be reactively used on source Observable as event handlers are emitted
   * @param combinedSources A Todo[] and SortByParameter observable, side-by-side, to enable sorting
   * @returns Tod[]
   */
  static sortFn([todos, sortBy]: [Todo[], SortByParameter]): Todo[] {
    /**
     * Here we pick the property name associated with the sortBy parameter we received,
     * give it easy to use variable names and then use relevant primitive sorting methods
     */
    todos.sort(({ [sortBy]: a }, { [sortBy]: b }) =>
      typeof a === 'string' ? a.localeCompare(b as string) : (a as number) - (b as number)
    );
    return todos;
  }
}
