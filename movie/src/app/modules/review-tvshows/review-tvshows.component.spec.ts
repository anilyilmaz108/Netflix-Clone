import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTvshowsComponent } from './review-tvshows.component';

describe('ReviewTvshowsComponent', () => {
  let component: ReviewTvshowsComponent;
  let fixture: ComponentFixture<ReviewTvshowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewTvshowsComponent]
    });
    fixture = TestBed.createComponent(ReviewTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
