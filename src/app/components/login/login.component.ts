import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [UserService],
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  userService=inject(UserService);
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),
    });
  }

  ngOnInit(): void {
    // You can add any initialization logic here
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Form Data:', this.loginForm.value);
      this.userService.loginUser(this.loginForm.value).subscribe(response=>{
        // Swal.fire({
        //   title: "Success",
        //   text: "Login Successful",
        //   icon: "success",
        //   confirmButtonText: "OK",
        // });
        if(response.role=='Admin'){
          this.router.navigate(['adminDashboard'], { replaceUrl: true });
        }else if(response.role=='student'){
          this.router.navigate(['dashboard'], { replaceUrl: true });
        }else if (this.loginTypeName === 'Trainer Login' && this.loginForm.value.username === 'Yaksh1' && this.loginForm.value.password === '12345') {
        this.router.navigate(['trainer/trainer-dashboard'], { replaceUrl: true });
        console.log('Trainer Login Successful');
          else{
          alert("Invalid User")
        }
      })
      // Here you would typically send the form data to your authentication service
    } else {
      // Mark all controls as touched to display validation errors
      this.markFormGroupTouched(this.loginForm);
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = this.passwordVisible ? 'text' : 'password';
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  openNav() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
      nav.style.width = '250px';
    }
  }

  closeNav() {
    this.loginForm.enable();
    const sidebar = document.getElementById('mySidebar');
    const content = document.getElementById('mainContent');
    if (sidebar && content) {
      sidebar.classList.toggle('open');
      content.classList.toggle('open');
    }
  }
  navOpen: boolean = false;
  toggleNav() {
    //this.navOpen = !this.navOpen;
    this.loginForm.disable();
    const sidebar = document.getElementById('mySidebar');
    const content = document.getElementById('mainContent');
    if (sidebar && content) {
      sidebar.classList.toggle('open');
      content.classList.toggle('open');
    }
  }
  loginTypeName:string="Student Login"
  loginType(value:string){
   this.loginTypeName=value;
   this.loginForm.reset();
   this.loginForm.enable();
   this.closeNav();
  }
}
