import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankaccount } from './bankaccount';

describe('Bankaccount', () => {
  let component: Bankaccount;
  let fixture: ComponentFixture<Bankaccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bankaccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bankaccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
