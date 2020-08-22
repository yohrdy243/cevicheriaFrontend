import { TestBed } from '@angular/core/testing';

import { AgregadoService } from './agregado.service';

describe('AgregadoService', () => {
  let service: AgregadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
