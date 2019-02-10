import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteoneComponent } from './routeone.component';

describe('RouteoneComponent', () => {
  let component: RouteoneComponent;
  let fixture: ComponentFixture<RouteoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
