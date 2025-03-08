import { ComponentFixture, TestBed } from '@angular/core/testing';

import HttpResourceRouteComponent from './http-resource.route.component';

describe('HttpResourceComponent', () => {
  let component: HttpResourceRouteComponent;
  let fixture: ComponentFixture<HttpResourceRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpResourceRouteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpResourceRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
