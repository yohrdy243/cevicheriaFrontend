import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineapedidoplatoComponent } from './lineapedidoplato.component';

describe('LineapedidoplatoComponent', () => {
  let component: LineapedidoplatoComponent;
  let fixture: ComponentFixture<LineapedidoplatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineapedidoplatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineapedidoplatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
