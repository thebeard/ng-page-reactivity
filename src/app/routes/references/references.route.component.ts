import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-references-route',
  template: `
    <h2>References</h2>
    <p>Some references used while creating this project.</p>
    <ul>
      @for(link of links; track link) {
      <li>
        <a [href]="link" target="_blank">{{ link }}</a>
      </li>
      }
    </ul>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReferencesRouteComponent {
  links = [
    'https://nx.dev/blog/angular-state-management-2025',
    'https://finsweet.com/client-first/docs/semantic-html-tags',
    'https://rxmarbles.com/',
    'https://angular.dev/essentials/signals',
    'https://angular.dev/guide/signals',
    'https://medium.com/@sehban.alam/what-is-zone-js-in-angular-e0029c21c32f',
  ];
}
