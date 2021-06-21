import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcolumnComponent } from './cardcolumn.component';

describe('CardcolumnComponent', () => {
  let component: CardcolumnComponent;
  let fixture: ComponentFixture<CardcolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcolumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
