import { CommonModule } from '@angular/common';
import { Component, inject, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { UserService } from '../../../../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add-edit',
  providers: [UserService],
  imports: [ReactiveFormsModule, CommonModule, MatCheckboxModule, MatInputModule],
  templateUrl: './student-add-edit.component.html',
  styleUrl: './student-add-edit.component.scss'
})
export class StudentAddEditComponent {
  userForm: FormGroup=new FormGroup({});
  route=inject(Router);

  constructor(private fb: FormBuilder, private userService:UserService) {
    
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: new FormControl('',[Validators.required]),
      middleName: new FormControl(''),
      lastName: new FormControl('',[Validators.required]),
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phoneNumber: new FormControl('',[ Validators.pattern(/^91\d{8,10}$/), Validators.minLength(12)]),
      parentPhoneNumber: new FormControl('',[ Validators.required, Validators.pattern(/^91\d{8,10}$/), Validators.minLength(12)]),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
      country: new FormControl(''),
      role: new FormControl('',[Validators.required]),
      isActive: new FormControl(true)
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this.userService.createUser(this.userForm.value).subscribe(
        response => {
          console.log('User created successfully', response);
          Swal.fire({
            icon: "success",
            title: "User created successfully",
            confirmButtonText: "OK",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            this.route.navigate(['studentManagement'], { replaceUrl: true });
            } else if (result.isDenied) {
             // Swal.fire("Changes are not saved", "", "info");
            }
          });
        },
        error => {
          console.error('Error creating user', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
