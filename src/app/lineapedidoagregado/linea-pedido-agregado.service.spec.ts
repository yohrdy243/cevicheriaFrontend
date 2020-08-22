import { TestBed } from '@angular/core/testing';

import { LineaPedidoAgregadoService } from './linea-pedido-agregado.service';

describe('LineaPedidoAgregadoService', () => {
  let service: LineaPedidoAgregadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineaPedidoAgregadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
