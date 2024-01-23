import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGroupComponent } from './movie-group.component';

describe('MovieGroupComponent', () => {
  let component: MovieGroupComponent;
  let fixture: ComponentFixture<MovieGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieGroupComponent]
    });
    fixture = TestBed.createComponent(MovieGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
