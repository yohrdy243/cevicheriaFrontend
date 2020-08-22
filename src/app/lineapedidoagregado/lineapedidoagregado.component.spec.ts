import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineapedidoagregadoComponent } from './lineapedidoagregado.component';

describe('LineapedidoagregadoComponent', () => {
  let component: LineapedidoagregadoComponent;
  let fixture: ComponentFixture<LineapedidoagregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineapedidoagregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineapedidoagregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
