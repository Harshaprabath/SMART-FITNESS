import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { WeightSchedule } from 'src/app/core/models/weightSchedule/weightSchedule'
import { WeightScheduleService } from 'src/app/core/service/weight-schedule/weight-schedule.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.sass'],
  providers: [ToastrService]
})
export class SchedulesComponent implements OnInit {
  data = new Array<WeightSchedule>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  weightSchedule:WeightSchedule[] = [];

  weightScheduleForm: FormGroup;

  constructor(
    private weightScheduleService: WeightScheduleService,
    config: NgbCarouselConfig,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    //--------------------------to implement
  }

  getAllWeightSchedules()
  {
    this.weightScheduleService.getAll()
      .subscribe(response=>
        {
          console.log(response)
          this.weightSchedule = response;
        }, error=>{

        });
  }

  newWeightScheduleForm(content)
  {
    this.weightScheduleForm = this.fb.group({
      id:[0],
      title: ['', [Validators.required]],
      gymName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      serviceCharge: ['', [Validators.required]],
      isActive: [true]
    });

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });
  }

  saveWeightSchedule()
  {
    this.weightScheduleService.saveWeightSchedule(this.weightScheduleForm.value)
      .subscribe(response=>{
        this.modalService.dismissAll();
        this.toastr.success(response.message, "Success");
        this.getAllWeightSchedules();
      },error=>{
        this.toastr.error("Network error has been occured. Please try again.", "Error");
      });
  }

  deleteWeightSchedule(row)
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
        this.weightScheduleService.deleteWeightSchedule(row.id)
      })
  }

}
