import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineapedidobebidaComponent } from './lineapedidobebida.component';

describe('LineapedidobebidaComponent', () => {
  let component: LineapedidobebidaComponent;
  let fixture: ComponentFixture<LineapedidobebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineapedidobebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineapedidobebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
