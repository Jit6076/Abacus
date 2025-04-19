import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-trainer-management',
  imports: [MatIconModule, MatButtonModule,RouterModule, CommonModule],
  templateUrl: './trainer-management.component.html',
  styleUrl: './trainer-management.component.scss'
})
export class TrainerManagementComponent {
  route=inject(Router);
  goToCreateTrainer() {
    this.route.navigate(['addTrainer']);
  }
}
