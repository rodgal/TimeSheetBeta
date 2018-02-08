import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsTareasComponent } from './ts-tareas.component';

describe('TsTareasComponent', () => {
  let component: TsTareasComponent;
  let fixture: ComponentFixture<TsTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
