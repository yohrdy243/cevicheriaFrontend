import { TestBed } from '@angular/core/testing';

import { LineaPedidoPlatoService } from './linea-pedido-plato.service';

describe('LineaPedidoPlatoService', () => {
  let service: LineaPedidoPlatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineaPedidoPlatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
