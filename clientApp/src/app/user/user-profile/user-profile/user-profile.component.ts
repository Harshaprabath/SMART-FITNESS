import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass'],
  providers: [ToastrService]
})
export class UserProfileComponent implements OnInit {
  active;
  userType = null;
  userId = null;
  data_static = new User();
  data = new User();
  user_t = String;
  scrollBarHorizontal = window.innerWidth < 1200;
  loadingIndicator = false;
  reorderable = true;
  submitted = false;

  updateProfileForm:FormGroup;
  updatePasswrodForm:FormGroup;
  currentUser: User;

  constructor(
     private userService:UserService,
     private formBuilder: FormBuilder,
     private spinner:NgxSpinnerService,
     private toastr: ToastrService,
     private router: Router,
    
     ) {
      this.updateProfileForm = this.createNewProfile();
      this.updatePasswrodForm = this.createUpdatePasswrodForm();
     }

  ngOnInit(): void {
    this.getCurrentuser();
    
   }
   
getCurrentuser() {
    
  this.loadingIndicator=true;
  this.userService.getCurrentUser()
     .subscribe(response=>
  {   
         this.data_static= response; 
         this.getUserById(this.data_static.id)
         
         this.loadingIndicator=false;
  },error=>{
         this.loadingIndicator=false;
        
     });
   }

getUserById(id:number){

  this.loadingIndicator=true;
  this.userService.getUserById(id)
  .subscribe(response=>
  {   
          console.log(response);
          this.data= response; 
          this.userId= this.data.id  
       
  
          this.userService.getUserById(this.userId).subscribe(response=>{
          this.currentUser = response;
    
          console.log(response);
    
          this.updateProfileForm.get('id').setValue(response.id);
          this.updateProfileForm.get('firstName').setValue(response.firstName);
          this.updateProfileForm.get('firstName').setValue(response.firstName);
          this.updateProfileForm.get('lastName').setValue(response.lastName);
          this.updateProfileForm.get('birthday').setValue(response.birthday);
          this.updateProfileForm.get('userType').setValue(response.userType);
          this.updateProfileForm.get('mobil').setValue(response.mobil);
          this.updateProfileForm.get('email').setValue(response.email);
          this.updateProfileForm.get('password').setValue(response.password);
                  
        })
      

      if (this.data.userType == 1){
         this.userType = "Admin";
      }else if (this.data.userType == 2){
        this.userType ="Custemer";
      }else if (this.data.userType == 3){
        this.userType ="Weight Trainer";
      }else if (this.data.userType == 4){
        this.userType ="Cardio Trainer";
      }
      else {
        this.userType ="Nutritionist";
      }
      this.loadingIndicator=false;
  },error=>{
      this.loadingIndicator=false;
     
  });

}




createNewProfile():FormGroup
{
  return this.formBuilder.group({

    id:[0],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    birthday: ['', [Validators.required]],
    proPic:[null],
    userType: [null, [Validators.required]],
    email:['',[Validators.required, Validators.email, Validators.minLength(5)],],
    mobil:['',[Validators.required]],
    password_1: ['', Validators.required], 
    password:['',[Validators.required]],
    isActive:[true]
      
  });
}

createUpdatePasswrodForm():FormGroup
  {
      return this.formBuilder.group({

        id:[0],
        currentPassword:['',Validators.required],
        newPassword:['',Validators.required],
        confirmPassword:['',Validators.required]
          
      });
  };


   //save user 
   saveUser()
   {  
     this.userService.saveUser(this.updateProfileForm.value)
     .subscribe(response=>{
        
         if(response.isSuccess)
         {
           
           this.toastr.success(response.message,"Success");
           this.getCurrentuser();
           
         }
         else
         {
           this.toastr.error(response.message,"Error");
         }
 
     },error=>{
       this.toastr.error("Network error has been occured. Please try again.","Error");
     });
 
   }


   ChangePassword()
    { 
     if  (this.updateProfileForm.value.password != this.updatePasswrodForm.value.currentPassword)
     {
         this.toastr.error(" Current Password is miss-match ","Error");
     }


    if(this.updatePasswrodForm.value.newPassword !=this.updatePasswrodForm.value.confirmPassword)
    {
         this.toastr.error(" confirm Password is miss-match ","Error");
    }
    else{
            this.userService.ChangePassword(this.updatePasswrodForm.value.id ,this.updatePasswrodForm.value.confirmPassword)
            .subscribe(response=>{
              if(response != null){
                this.toastr.success("Password Chenge","Success");
              }else{
                this.toastr.error("Network error has been occured. Please try again.","Error");
              }
            },error=>{
              this.toastr.error("Network error has been occured. Please try again.","Error");
            });
      }
   }

}
