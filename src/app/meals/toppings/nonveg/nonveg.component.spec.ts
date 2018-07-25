import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegComponent } from './nonveg.component';

describe('NonvegComponent', () => {
  let component: NonvegComponent;
  let fixture: ComponentFixture<NonvegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonvegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
