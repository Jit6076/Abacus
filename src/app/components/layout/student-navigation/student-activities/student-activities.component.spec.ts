import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActivitiesComponent } from './student-activities.component';

describe('StudentActivitiesComponent', () => {
  let component: StudentActivitiesComponent;
  let fixture: ComponentFixture<StudentActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
