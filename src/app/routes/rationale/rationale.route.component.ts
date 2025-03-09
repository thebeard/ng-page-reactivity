import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rationale',
  imports: [RouterModule],
  templateUrl: './rationale.route.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RationaleRouteComponent {
}
