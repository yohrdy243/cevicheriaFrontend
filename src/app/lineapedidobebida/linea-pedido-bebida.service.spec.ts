import { TestBed } from '@angular/core/testing';

import { LineaPedidoBebidaService } from './linea-pedido-bebida.service';

describe('LineaPedidoBebidaService', () => {
  let service: LineaPedidoBebidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineaPedidoBebidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
