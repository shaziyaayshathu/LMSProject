import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerNavComponent } from './trainer-nav.component';

describe('TrainerNavComponent', () => {
  let component: TrainerNavComponent;
  let fixture: ComponentFixture<TrainerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
