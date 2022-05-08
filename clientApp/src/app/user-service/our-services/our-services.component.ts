import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Assistance } from 'src/app/core/models/serviceAndSchedule/assistance';
import { AssistanceService} from 'src/app/core/service/assistance/assistance.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.sass'],
  providers: [ToastrService]
})
export class OurServicesComponent implements OnInit {
  data = new Array<Assistance>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  assistance:Assistance[]=[];

  assistanceForm: FormGroup;

  constructor(
    private assistanceService:AssistanceService,
    config: NgbCarouselConfig,
    private spinner:NgxSpinnerService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.getAllassistance()
  }

  
  getAllassistance() 
  {

    this.assistanceService.getAll()
    .subscribe(response=>
     {
       console.log(response)
       this.assistance = response;  
     },error=>{
     
     });
 }




     //save assistance form
  addNewAssistance(content)
  {

   this.assistanceForm = this.fb.group({
     id:[0],
     assistanceImage: [null],
     title: ['', [Validators.required]],
     description: ['', [Validators.required]],
     active:[true]
   });

   this.modalService.open(content, {
     ariaLabelledBy: 'modal-basic-title',
     size: 'lg',
   });

 }

  //save user 
  saveAssistance()
  {   
    this.assistanceService.saveAssistance(this.assistanceForm.value)
    .subscribe(response=>{
        
       
          this.modalService.dismissAll();
          this.toastr.success(response.message,"Success");
          this.getAllassistance();
          
        

    },error=>{
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });

  }

  //delete uaer
  deleteAssistance(row) {
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

        this.assistanceService.delete(row.id).subscribe(response=>{

          if(response.isSuccess)
          {
            this.toastr.success(response.message,"Success");
            this.getAllassistance();
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

  get id()
  {
    return this.assistanceForm.get("id").value;
  }

  //update user (Reactive Form)
  updateAssistance(row:Assistance, rowIndex:number, content:any) 
  {

    this.spinner.show();
      this.assistanceService.getAssistanceById(row.id)
      .subscribe(response=>{
        this.spinner.hide();


        this.assistanceForm = this.fb.group({
          id:[row.id],          
          title: [row.title, [Validators.required]],
          description: [row.description, [Validators.required]],
          active:[true]

        });
    
        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'lg',
        });
      },error=>{
        this.spinner.hide();
      });
  } 
}
