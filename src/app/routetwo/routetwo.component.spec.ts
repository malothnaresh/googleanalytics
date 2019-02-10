import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutetwoComponent } from './routetwo.component';

describe('RoutetwoComponent', () => {
  let component: RoutetwoComponent;
  let fixture: ComponentFixture<RoutetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
