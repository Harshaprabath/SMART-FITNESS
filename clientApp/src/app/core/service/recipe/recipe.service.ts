import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/nutrition/recipe';
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  //get all recipes service
  getAll(): Observable<Recipe[]> {
    return this.httpClient.
      get<Recipe[]>(environment.apiUrl + '/recipe/all');
  }

  //save all recipes service
  saveRecipe(vm:Recipe): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/recipe/save',vm);
  }

  //delete recipes service
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/recipe/delete/' + id);
  }

  //get a single recipe service
  getRecipeById(id: number): Observable<Recipe> {
    return this.httpClient.
      get<Recipe>(environment.apiUrl + '/recipe/find/' + id);
  }
}
