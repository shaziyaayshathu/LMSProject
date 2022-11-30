import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpExamsComponent } from './set-up-exams.component';

describe('SetUpExamsComponent', () => {
  let component: SetUpExamsComponent;
  let fixture: ComponentFixture<SetUpExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUpExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUpExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
