import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from 'src/app/core/models/nutrition/recipe';
import { RecipeService } from 'src/app/core/service/recipe/recipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-healthy-recipes',
  templateUrl: './healthy-recipes.component.html',
  styleUrls: ['./healthy-recipes.component.sass'],
  providers: [ToastrService]
})
export class HealthyRecipesComponent implements OnInit {
  data = new Array<Recipe>();
  showNavigationArrows = false;
  showNavigationIndicators = false;
  recipe:Recipe[]=[];

  recipeForm:FormGroup;

  constructor(
    private recipeService:RecipeService,
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
    
    this.getAllRecipe();

  }

  getAllRecipe()
   {
     this.recipeService.getAll()
      .subscribe(response=>
       {
         console.log(response)
         this.recipe = response;  
       },error=>{
       
       });
   }

     //save recipe form
  addNewRecipe(content)
  {

   this.recipeForm = this.fb.group({
     id:[null],
     description: ['', [Validators.required]],
     subject: ['', [Validators.required]],
     active:[true]
   });

   this.modalService.open(content, {
     ariaLabelledBy: 'modal-basic-title',
     size: 'lg',
   });

 }

  //save recipe 
  saverecipe()
  {   
    this.recipeService.saveRecipe(this.recipeForm.value)
    .subscribe(response=>{
        
        console.log(response);
          this.modalService.dismissAll();
          this.toastr.success(response.message,"Success");
          this.getAllRecipe();
          
        

    },error=>{
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });

  }

  //delete recipe
  deleteRecipe(row) {
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

        this.recipeService.delete(row.id).subscribe(response=>{

          if(response.isSuccess)
          {
            this.toastr.success(response.message,"Success");
            this.getAllRecipe();
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
    return this.recipeForm.get("id").value;
  }

  //update recipe (Reactive Form)
  updateRecipe(row:Recipe, rowIndex:number, content:any) 
  {

    this.spinner.show();
      this.recipeService.getRecipeById(row.id)
      .subscribe(response=>{
        this.spinner.hide();


        this.recipeForm = this.fb.group({
          id:[row.id],
          description: [row.description, [Validators.required]],
          subject: [row.subject, [Validators.required]],
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
