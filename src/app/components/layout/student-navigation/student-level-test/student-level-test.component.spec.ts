import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLevelTestComponent } from './student-level-test.component';

describe('StudentLevelTestComponent', () => {
  let component: StudentLevelTestComponent;
  let fixture: ComponentFixture<StudentLevelTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLevelTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLevelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
