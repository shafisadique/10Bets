import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  public isLoading = false;
  showPassword = false;
  public validationError = false;
  errorMessage: string = '';
   constructor(private authservice:AuthService,private formBuilder:FormBuilder,private toastr:ToastrService,private router:Router) { }
   ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      code: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]], 
    });
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    console.log('working')
  if (this.loginForm.valid) {
    let data = this.loginForm.value;
    this.authservice.login(data).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toastr.success('Login successful', 'Welcome To 10 Bets');
        this.router.navigate(['/']); // Redirect after successful login
      },
      error: (err) => {
        this.isLoading = false;
        this.toastr.error('Invalid Username or Password', 'Login Failed');
        this.validationError = true;
      },
    });
 }
}
}
