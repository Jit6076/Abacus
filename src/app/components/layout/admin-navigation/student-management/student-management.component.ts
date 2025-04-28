import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router,RouterModule } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-student-management',
  imports: [MatIconModule, MatButtonModule,RouterModule, CommonModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.scss',
  providers: [UserService],
})
export class StudentManagementComponent {
  route=inject(Router);
  userService=inject(UserService);
  students:any[]=[];
  ngOnInit() {
    this.userService.getAllUsers().subscribe((res:any) => {
      console.log(res);
    });
  }
  goToCreateStudent() {
    this.route.navigate(['addStudent']);
  }

}
