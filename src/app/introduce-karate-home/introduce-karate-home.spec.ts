import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceKarateHome } from './introduce-karate-home';

describe('IntroduceKarateHome', () => {
  let component: IntroduceKarateHome;
  let fixture: ComponentFixture<IntroduceKarateHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduceKarateHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceKarateHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
