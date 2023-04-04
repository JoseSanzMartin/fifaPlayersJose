import { TestBed } from '@angular/core/testing';

import { CardsPlayersService } from './cards-players.service';

describe('CardsPlayersService', () => {
  let service: CardsPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
