import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDialogeComponent } from './course-dialoge.component';

describe('CourseDialogeComponent', () => {
  let component: CourseDialogeComponent;
  let fixture: ComponentFixture<CourseDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDialogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
