import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotobaCards } from './kotoba-cards';

describe('KotobaCards', () => {
  let component: KotobaCards;
  let fixture: ComponentFixture<KotobaCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KotobaCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotobaCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
