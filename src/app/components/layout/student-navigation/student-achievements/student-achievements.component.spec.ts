import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAchievementsComponent } from './student-achievements.component';

describe('StudentAchievementsComponent', () => {
  let component: StudentAchievementsComponent;
  let fixture: ComponentFixture<StudentAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
