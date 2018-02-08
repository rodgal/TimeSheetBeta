import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsNavbarComponent } from './ts-navbar.component';

describe('TsNavbarComponent', () => {
  let component: TsNavbarComponent;
  let fixture: ComponentFixture<TsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
