import { TestBed, inject } from '@angular/core/testing';

import { SaludadorService } from './saludador.service';

describe('SaludadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaludadorService]
    });
  });

  it('should ...', inject([SaludadorService], (service: SaludadorService) => {
    expect(service).toBeTruthy();
  }));
});
