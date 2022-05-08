import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { WeightEvent } from 'src/app/core/models/weightEvent/weightEvent'
import { WeightEventService } from 'src/app/core/service/weight-event/weight-event.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.sass'],
  providers: [ToastrService]
})

export class SpecialEventsComponent implements OnInit {
  data = new Array<WeightEvent>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  weightEvent: WeightEvent[] = [];

  weightEventForm: FormGroup;

  constructor(
    private weightEventService: WeightEventService,
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
    //to code ----------------------------------
  }

  getAllWeightEvents()
  {
    this.weightEventService.getAll()
      .subscribe(response=>
        {
          console.log(response)
          this.weightEvent = response;
        }, error=>{

        });
  }

  newWeightEventForm(content)
  {
    this.weightEventForm = this.fb.group({
      id:[0],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      entranceFee: ['', [Validators.required]],
      entrants: ['', [Validators.required]],
      isActive: [true]
    });

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });
  }

  saveWeightEvent()
  {
    this.weightEventService.saveWeightEvent(this.weightEventForm.value)
      .subscribe(response=>{
        this.modalService.dismissAll();
        this.toastr.success(response.message, "Success");
        this.getAllWeightEvents();
      }, error=>{
        this.toastr.error("Network error has been occured. Please try again.", "Error");
      });
  }

  deleteWeightEvent(row)
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
          this.weightEventService.deleteWeightEvent(row.id).subscribe(response=>{
            if(response.isSuccess) {
              this.toastr.success(response.message, "Success");
              this.getAllWeightEvents();
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
    return this.weightEventForm.get("id").value;
  }

  updateWeightEvent(row:WeightEvent, rowIndex:number, content:any)
  {
    this.spinner.show();
    this.weightEventService.getWeightEventById(row.id)
      .subscribe(response=> {
        this.spinner.hide();

        this.weightEventForm = this.fb.group({
          id: [row.id],
          title: [row.title, [Validators.required]],
          description: [row.description, [Validators.required]],
          entranceFee: [row.entranceFee, [Validators.required]],
          entrants: [row.entrants, [Validators.required]],
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





