import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacusToolComponent } from './abacus-tool.component';

describe('AbacusToolComponent', () => {
  let component: AbacusToolComponent;
  let fixture: ComponentFixture<AbacusToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbacusToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbacusToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
