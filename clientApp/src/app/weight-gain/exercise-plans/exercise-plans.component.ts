import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Weight } from 'src/app/core/models/weight/weight'
import { WeightService } from 'src/app/core/service/weight/weight.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise-plans',
  templateUrl: './exercise-plans.component.html',
  styleUrls: ['./exercise-plans.component.sass'],
  providers: [ToastrService]
})
export class ExercisePlansComponent implements OnInit {
  data = new Array<Weight>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  weight:Weight[]= [];

  weightForm:FormGroup;

  constructor(
    private weightService:WeightService,
    config: NgbCarouselConfig,
    private spinner:NgxSpinnerService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.getAllWeightPlans()
  }

  getAllWeightPlans()
  {
    this.weightService.getAll()
      .subscribe(response=>
        {
          console.log(response)
          this.weight = response;
        }, error=>{

        });
  }

  newWeightPlanForm(content)
  {
    this.weightForm = this.fb.group({
      id:[0],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      planType: ['', [Validators.required]],
      price: ['', [Validators.required]],
      isActive: [true]
    });

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });
  }

  saveWeightPlan()
  {
    this.weightService.saveWeight(this.weightForm.value)
      .subscribe(response=>{
        this.modalService.dismissAll();
        this.toastr.success(response.message, "Success");
        this.getAllWeightPlans();
      }, error=>{
        this.toastr.error("Network error has been occured. Please try again.", "Error");
      });
  }

  deleteWeightPlan(row)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          this.weightService.deleteWaight(row.id).subscribe(response=>{
            if(response.isSuccess) {
              this.toastr.success(response.message, "Success");
              this.getAllWeightPlans();
            }
            else {
              this.toastr.error(response.message, "Error");
            }
          }, error=> {
            this.toastr.error("Network error has been occured. Please try again.","Error");
          });
        }
      });
  }

  get id()
  {
    return this.weightForm.get("id").value;
  }

  updateWeightPlan(row:Weight, rowIndex:number, content:any)
  {
    this.spinner.show();
    this.weightService.getWeightById(row.id)
      .subscribe(response=> {
        this.spinner.hide();

        this.weightForm = this.fb.group({
          id: [row.id],
          title: [row.title, [Validators.required]],
          description: [row.description, [Validators.required]],
          planType: [row.planType, [Validators.required]],
          price: [row.price, [Validators.required]],
          isActive: [true]
        });

        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'lg',
        });
      }, error=> {
        this.spinner.hide();
      });
  }
}
