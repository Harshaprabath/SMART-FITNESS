import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FoodFact } from 'src/app/core/models/nutrition/food-fact';
import { FoodFactService } from 'src/app/core/service/food-fact/food-fact.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-food-facts',
  templateUrl: './food-facts.component.html',
  styleUrls: ['./food-facts.component.sass'],
  providers: [ToastrService]
})
export class FoodFactsComponent implements OnInit {

  data = new Array<FoodFact>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  foodfact:FoodFact[]=[];

  foodfactForm:FormGroup;

  constructor(
    private foodFactService:FoodFactService,
    config: NgbCarouselConfig,
    private spinner:NgxSpinnerService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,) { }

  ngOnInit(): void {

    this.getAllFoodFact();

  }

  getAllFoodFact()
   {
     this.foodFactService.getAll()
      .subscribe(response=>
       {
         console.log(response)
         this.foodfact = response;  
       },error=>{
       
       });
   }

     //save food fact form
  addNewFoodFact(content)
  {

   this.foodfactForm = this.fb.group({
     id:[null],
     foodName: ['', [Validators.required]],
     description: ['', [Validators.required]],     
     active:[true]
   });

   this.modalService.open(content, {
     ariaLabelledBy: 'modal-basic-title',
     size: 'lg',
   });

 }

  //save food fact 
  saveFoodFact()
  {   
    this.foodFactService.saveFoodFact(this.foodfactForm.value)
    .subscribe(response=>{
        
        console.log(response);
          this.modalService.dismissAll();
          this.toastr.success(response.message,"Success");
          this.getAllFoodFact();
          
        

    },error=>{
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });

  }

  //delete food fact
  deleteFoodFact(row) {
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

        this.foodFactService.delete(row.id).subscribe(response=>{

          if(response.isSuccess)
          {
            this.toastr.success(response.message,"Success");
            this.getAllFoodFact();
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
    return this.foodfactForm.get("id").value;
  }

  //update food fact (Reactive Form)
  updateFoodFact(row:FoodFact, rowIndex:number, content:any) 
  {

    this.spinner.show();
      this.foodFactService.getFoodFactById(row.id)
      .subscribe(response=>{
        this.spinner.hide();


        this.foodfactForm = this.fb.group({
          id:[row.id],
          foodName: [row.foodName, [Validators.required]],
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
