import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuecardComponent } from './issuecard.component';

describe('IssuecardComponent', () => {
  let component: IssuecardComponent;
  let fixture: ComponentFixture<IssuecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
