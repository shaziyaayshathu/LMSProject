import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateSubmissionComponent } from './evaluate-submission.component';

describe('EvaluateSubmissionComponent', () => {
  let component: EvaluateSubmissionComponent;
  let fixture: ComponentFixture<EvaluateSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
