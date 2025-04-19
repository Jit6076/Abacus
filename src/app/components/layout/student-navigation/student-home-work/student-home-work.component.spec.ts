import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomeWorkComponent } from './student-home-work.component';

describe('StudentHomeWorkComponent', () => {
  let component: StudentHomeWorkComponent;
  let fixture: ComponentFixture<StudentHomeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentHomeWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
