import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Plan } from 'src/app/core/models/nutrition/plan';
import { PlanService } from 'src/app/core/service/plan/plan.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.sass'],
  providers: [ToastrService]
})
export class DietPlanComponent implements OnInit {
  data = new Array<Plan>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  plan:Plan[]=[];

  planForm:FormGroup;

  constructor(
    private planService:PlanService,
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
    this.getAllplan()
  }

   
   getAllplan()
   {
     this.planService.getAll()
      .subscribe(response=>
       {
         console.log(response)
         this.plan = response;  
       },error=>{
       
       });
   }

     //save plan form
  addNewPlan(content)
  {

   this.planForm = this.fb.group({
     id:[0],
     duration: ['', [Validators.required]],
     description: ['', [Validators.required]],
     planType: ['', [Validators.required]],
     active:[true]
   });

   this.modalService.open(content, {
     ariaLabelledBy: 'modal-basic-title',
     size: 'lg',
   });

 }

  //save user 
  savePlan()
  {   
    this.planService.savePlan(this.planForm.value)
    .subscribe(response=>{
        
       
          this.modalService.dismissAll();
          this.toastr.success(response.message,"Success");
          this.getAllplan();
          
        

    },error=>{
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });

  }

  //delete uaer
  deletePlan(row) {
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

        this.planService.delete(row.id).subscribe(response=>{

          if(response.isSuccess)
          {
            this.toastr.success(response.message,"Success");
            this.getAllplan();
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
    return this.planForm.get("id").value;
  }

  //update user (Reactive Form)
  updatePlan(row:Plan, rowIndex:number, content:any) 
  {

    this.spinner.show();
      this.planService.getPlanById(row.id)
      .subscribe(response=>{
        this.spinner.hide();


        this.planForm = this.fb.group({
          id:[row.id],          
          duration: [row.duration, [Validators.required]],
          description: [row.description, [Validators.required]],
          planType: [row.planType, [Validators.required]],
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
