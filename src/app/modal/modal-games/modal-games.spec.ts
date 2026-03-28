import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGames } from './modal-games';

describe('ModalGames', () => {
  let component: ModalGames;
  let fixture: ComponentFixture<ModalGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
