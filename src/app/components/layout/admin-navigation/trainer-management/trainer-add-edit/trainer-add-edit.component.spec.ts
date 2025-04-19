import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAddEditComponent } from './trainer-add-edit.component';

describe('TrainerAddEditComponent', () => {
  let component: TrainerAddEditComponent;
  let fixture: ComponentFixture<TrainerAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
