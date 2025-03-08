import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { SortByParameter } from '../../models/sort-by-parameter';
import { ToDoService } from '../../services/to-do.service';
import PageActionsComponent from '../../components/page-actions/page-actions.component';

@Component({
  selector: 'app-signals-route',
  imports: [PageActionsComponent],
  template: `<header class="page-header">
      <h2>Page Reactivity with Signals</h2>
      <app-page-actions (sort)="sortUpdate$.next($event)" />
    </header>

    <p>
      This started as a one-liner class that just queried the todo's from the TodoService to show via the Signal
      component. Adding the sorting made this implementation (option) a lot more involved than I first anticipated.
      We'll see how the httpResource method fares.
    </p>

    <p>
      The complexity relates to the fact that, unlike signals instantiated in a typical way, signals created with
      the toSignal helper method, produces read only signals. This means we had to make the source observable be
      reactive to ordering/sorting context. Further context available in the source code.
    </p>

    <ul>
      @for(todo of todos(); track todo.id) {
      <li>{{ todo.title }}</li>
      }
    </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalsRouteComponent {
  /**
   * We use this observable to emit sort event handlers
   */
  sortUpdate$ = new BehaviorSubject<SortByParameter>('id' as SortByParameter);

  /**
   * We set up a final source observable for our signal, by joining our service observable with
   * our sortBy observable and then pipe that into a sorting function.
   */
  private readonly todos$ = combineLatest([inject(ToDoService).getTodos$(), this.sortUpdate$]).pipe(
    map(ToDoService.sortFn)
  );

  /**
   * Ultimately the signal we want to iterate over in our template file
   */
  todos = toSignal(this.todos$);
}
