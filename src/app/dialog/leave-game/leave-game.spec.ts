import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveGame } from './leave-game';

describe('LeaveGame', () => {
  let component: LeaveGame;
  let fixture: ComponentFixture<LeaveGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
