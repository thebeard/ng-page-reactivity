import { ComponentFixture, TestBed } from '@angular/core/testing';

import SignalsRouteComponent from './signals.route.component';

describe('ClientRouteComponent', () => {
  let component: SignalsRouteComponent;
  let fixture: ComponentFixture<SignalsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsRouteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
