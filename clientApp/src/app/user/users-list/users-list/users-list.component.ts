import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/core/service/user/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass'],
  providers: [ToastrService]
})
export class UsersListComponent implements OnInit {

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  data = new Array<User>();
  usertype = null;
  user_t = String;
  scrollBarHorizontal = window.innerWidth < 1200;
  loadingIndicator = false;
  reorderable = true;

  userFilterForm:FormGroup;
  userForm:FormGroup;


  currentPage: number = 0;
  pageSize: number = 10;
  totalRecord: number = 0;

  constructor(
    private userService:UserService,
    private spinner:NgxSpinnerService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  //get all users
  getAll()
  {
    this.loadingIndicator=true;
    this.userService.getAll()
    .subscribe(response=>
    {   
        console.log(response);
        this.data= response;
        this.loadingIndicator=false;
    },error=>{
        this.loadingIndicator=false;
        this.toastr.error("Network error has been occured. Please try again.","Error");
    });
  }
  getAll2(){}

 //delete uaer
  deleteUser(row) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
    }).then((result) => {

      if (result.value) {

        this.userService.delete(row.id).subscribe(response=>{

          if(response.isSuccess)
          {
            this.toastr.success(response.message,"Success");
            this.getAll();
          }
          else
          {
            this.toastr.error(response.message,"Error");
          }
    
        },error=>{
          this.toastr.error("Network error has been occured. Please try again.","Error");
        });
      }
    });
  }

  //save user form
  addNewuser(content)
  {

   this.userForm = this.fb.group({
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

   this.modalService.open(content, {
     ariaLabelledBy: 'modal-basic-title',
     size: 'lg',
   });

 }

  //save user 
  saveUser()
  {   console.log(this.userForm.value);
    this.userService.saveUser(this.userForm.value)
    .subscribe(response=>{
        if(this.userForm.value.password_1 !=this.userForm.value.password)
        {
          this.toastr.error("Password miss-match","Error");         
        }
        else if(response.isSuccess)
        {
          this.modalService.dismissAll();
          this.toastr.success(response.message,"Success");
          this.getAll();
          
        }
        else
        {
          this.toastr.error(response.message,"Error");
        }

    },error=>{
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });

  }

  //update user (Reactive Form)
  updateUser(row:User, rowIndex:number, content:any) 
  {

    this.spinner.show();
      this.userService.getUserById(row.id)
      .subscribe(response=>{
        this.spinner.hide();


        this.userForm = this.fb.group({
          id:[row.id],          
          firstName: [response.firstName, [Validators.required]],
          lastName: [response.lastName, [Validators.required]],
          birthday: [response.birthday, [Validators.required]],
          proPic:[null],
          userType: [response.userType, [Validators.required]],
          email:[response.email,[Validators.required, Validators.email, Validators.minLength(5)],],
          mobil:[response.mobil,[Validators.required]],
          password_1:[response.password,[Validators.required]],
          password:[response.password,[Validators.required]],
          isActive:[true]

        });
    
        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'lg',
        });
      },error=>{
        this.spinner.hide();
      });


  }

  get id()
  {
    return this.userForm.get("id").value;
  }


}
