import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-management',
  imports: [MatIconModule, MatButtonModule,RouterModule, CommonModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.scss'
})
export class StudentManagementComponent {
  route=inject(Router);
  goToCreateStudent() {
    this.route.navigate(['addStudent']);
  }

}
