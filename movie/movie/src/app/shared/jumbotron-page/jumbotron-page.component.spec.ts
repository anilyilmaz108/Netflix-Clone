import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronPageComponent } from './jumbotron-page.component';

describe('JumbotronPageComponent', () => {
  let component: JumbotronPageComponent;
  let fixture: ComponentFixture<JumbotronPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JumbotronPageComponent]
    });
    fixture = TestBed.createComponent(JumbotronPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
