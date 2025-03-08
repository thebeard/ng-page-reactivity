import { ComponentFixture, TestBed } from '@angular/core/testing';

import ReferencesRouteComponent from './references.route.component';

describe('ReferencesRouteComponent', () => {
  let component: ReferencesRouteComponent;
  let fixture: ComponentFixture<ReferencesRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
