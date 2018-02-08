import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsProyectosComponent } from './ts-proyectos.component';

describe('TsProyectosComponent', () => {
  let component: TsProyectosComponent;
  let fixture: ComponentFixture<TsProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
