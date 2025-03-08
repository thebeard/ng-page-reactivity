import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import PageActionsComponent from '../../components/page-actions/page-actions.component';
import { SortByParameter } from '../../models/sort-by-parameter';

@Component({
  selector: 'app-http-resource-route',
  imports: [PageActionsComponent],
  template: ` <header class="page-header">
      <h2>Page Reactivity with httpResource</h2>
      <app-page-actions (sort)="sort($event)" />
    </header>
    <p>
      The signal produced by the httpResource creation method is not readonly, allowing this implementation to be
      particularly minimal in nature and matches the most basic of signal implementations.
    </p>
    <ul>
      @for(todo of todos.value(); track todo.id) {
      <li>{{ todo.title }}</li>
      }
    </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HttpResourceRouteComponent {
  todos = inject(ToDoService).getTodosHttpResource();

  sort(sortBy: SortByParameter) {
    this.todos.update((todos) => ToDoService.sortFn([todos, sortBy]));
  }
}
