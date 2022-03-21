import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResolveStart, Router } from '@angular/router';
import { UserService } from 'src/app/core/service/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
  providers: [ToastrService]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    
    ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id:[''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      proPic:[null],
      userType: ['', Validators.required],
      email: [ '', [Validators.required, Validators.email, Validators.minLength(5)],],
      mobil: ['', Validators.required],
      password_1: ['', Validators.required],
      password: ['', Validators.required],
      isActive: [true, Validators.required],
      termcondition: [false, [Validators.requiredTrue]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      this.error = 'Invalid data !';
      return;
    }else if(this.registerForm.value.password != this.registerForm.value.password_1 ){
      this.error = 'Password Mismatch';
      return;
      
    }else {
      console.log(this.registerForm.value);
      this.userService
        .saveUser(this.registerForm.value)
        .subscribe(
          (res) => {
            console.log(res);
            if(res.isSuccess) {
               
                this.router.navigate(['/user/user-profile']);
              
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
        );
      
        }
  }
}
