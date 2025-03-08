import { ComponentFixture, TestBed } from '@angular/core/testing';

import RationaleRouteComponent from './rationale.route.component';

describe('RationaleRouteComponent', () => {
  let component: RationaleRouteComponent;
  let fixture: ComponentFixture<RationaleRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RationaleRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RationaleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
