import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Agenda } from 'src/app/core/models/serviceAndSchedule/agenda';
import { AgendaService} from 'src/app/core/service/agenda/agenda.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-our-agendas',
  templateUrl: './our-agendas.component.html',
  styleUrls: ['./our-agendas.component.sass'],
  providers: [ToastrService]
})
export class OurAgendasComponent implements OnInit {
  data = new Array<Agenda>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  agenda:Agenda[]=[];

  agendaForm: FormGroup;

  constructor(
    private agendaService:AgendaService,
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
    this.getAllagenda()
  }

  
  getAllagenda() 
  {

    this.agendaService.getAll()
    .subscribe(response=>
     {
       console.log(response)
       this.agenda = response;  
     },error=>{
     
     });
 }




     //save assistance form
  addNewAgenda(content)
  {

   this.agendaForm = this.fb.group({
     id:[0],
     title: ['', [Validators.required]],
     description: ['', [Validators.required]],
     time: ['', [Validators.required]],
     date: ['', [Validators.required]],
     active:[true]
   });

   this.modalService.open(content, {
     ariaLabelledBy: 'modal-basic-title',
     size: 'lg',
   });

 }

  //save user 
  saveAgenda()
  {   
    this.agendaService.saveAgenda(this.agendaForm.value)
    .subscribe(response=>{
        
       
          this.modalService.dismissAll();
          this.toastr.success(response.message,"Success");
          this.getAllagenda();
          
        

    },error=>{
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });

  }

  //delete agenda
  deleteAgenda(row) {
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

        this.agendaService.delete(row.id).subscribe(response=>{

          if(response.isSuccess)
          {
            this.toastr.success(response.message,"Success");
            this.getAllagenda();
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
    return this.agendaForm.get("id").value;
  }

  //update user (Reactive Form)
  updateAgenda(row:Agenda, rowIndex:number, content:any) 
  {

    this.spinner.show();
      this.agendaService.getAssistanceById(row.id)
      .subscribe(response=>{
        this.spinner.hide();


        this.agendaForm = this.fb.group({
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
