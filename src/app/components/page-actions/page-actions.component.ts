import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-actions',
  imports: [],
  template: `
    <span>Order by:</span>
    <button (click)="sort.emit('id')">Id</button>
    <button (click)="sort.emit('title')">Title</button>
  `,
  styles: `span {
    margin-right: var(--gutter);
  }
  
  button + button {
    margin-left: 5px;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageActionsComponent {
  @Output() sort = new EventEmitter<'id' | 'title'>();
}
