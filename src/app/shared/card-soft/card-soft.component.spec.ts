import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSoftComponent } from './card-soft.component';

describe('CardSoftComponent', () => {
  let component: CardSoftComponent;
  let fixture: ComponentFixture<CardSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
