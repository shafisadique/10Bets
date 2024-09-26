import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WelcomePopupComponent } from '../components/welcome-popup/welcome-popup.component';

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
   constructor(private authservice:AuthService,private formBuilder:FormBuilder,private toastr:ToastrService,private router:Router,private modalService:NgbModal) { }
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
    if (this.loginForm.valid) {
      let data = this.loginForm.value;
      this.authservice.login(data).subscribe({
       next:(res:any)=>{
        if (res.isSuccess == false){
          this.toastr.error('Error',res.data);
        }
        if(res.isSuccess == true){
          this.toastr.success('login Successfully');
          const modalRef = this.modalService.open(WelcomePopupComponent, {
            windowClass: 'custom-modal-content'
        });
        (<WelcomePopupComponent> modalRef.componentInstance).data = {
            
          }
          this.router.navigate(['/tc'])
        }
        else{
          this.router.navigate(['/login'])
        }
  
       },
       error:(e)=>{
         console.log(e)
         this.toastr.error('Issue in Loin',e.message,{
           timeOut:300
         });
       }
     })
   }
  }
}
