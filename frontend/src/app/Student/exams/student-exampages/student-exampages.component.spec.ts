import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExampagesComponent } from './student-exampages.component';

describe('StudentExampagesComponent', () => {
  let component: StudentExampagesComponent;
  let fixture: ComponentFixture<StudentExampagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExampagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentExampagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
