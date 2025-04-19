import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentShopComponent } from './student-shop.component';

describe('StudentShopComponent', () => {
  let component: StudentShopComponent;
  let fixture: ComponentFixture<StudentShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
