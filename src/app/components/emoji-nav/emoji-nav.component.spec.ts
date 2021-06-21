import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiNavComponent } from './emoji-nav.component';

describe('EmojiNavComponent', () => {
  let component: EmojiNavComponent;
  let fixture: ComponentFixture<EmojiNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
