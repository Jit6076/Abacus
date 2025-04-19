import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLearningToolComponent } from './student-learning-tool.component';

describe('StudentLearningToolComponent', () => {
  let component: StudentLearningToolComponent;
  let fixture: ComponentFixture<StudentLearningToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLearningToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLearningToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
