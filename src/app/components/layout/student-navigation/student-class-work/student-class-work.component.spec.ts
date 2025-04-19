import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassWorkComponent } from './student-class-work.component';

describe('StudentClassWorkComponent', () => {
  let component: StudentClassWorkComponent;
  let fixture: ComponentFixture<StudentClassWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentClassWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentClassWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
