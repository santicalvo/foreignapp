import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignappComponent } from './foreignapp.component';

describe('ForeignappComponent', () => {
  let component: ForeignappComponent;
  let fixture: ComponentFixture<ForeignappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
