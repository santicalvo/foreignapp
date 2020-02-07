import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignAppP1Component } from './foreign-app-p1.component';

describe('ForeignAppP1Component', () => {
  let component: ForeignAppP1Component;
  let fixture: ComponentFixture<ForeignAppP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignAppP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignAppP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
