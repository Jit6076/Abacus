import { Component, inject } from '@angular/core';
import  { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StudentNavigationComponent } from './student-navigation/student-navigation.component';
import { TrainerNavigationComponent } from './trainer-navigation/trainer-navigation.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';

@Component({
  selector: 'app-layout',
  imports: [ CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  router = inject(Router);
ngOnInit(): void {
 // this.router.navigateByUrl('');
}

}
