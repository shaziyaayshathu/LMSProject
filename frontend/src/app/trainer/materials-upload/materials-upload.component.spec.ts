import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsUploadComponent } from './materials-upload.component';

describe('MaterialsUploadComponent', () => {
  let component: MaterialsUploadComponent;
  let fixture: ComponentFixture<MaterialsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
