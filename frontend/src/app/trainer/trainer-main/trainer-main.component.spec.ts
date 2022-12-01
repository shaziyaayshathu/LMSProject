import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerMainComponent } from './trainer-main.component';

describe('TrainerMainComponent', () => {
  let component: TrainerMainComponent;
  let fixture: ComponentFixture<TrainerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
