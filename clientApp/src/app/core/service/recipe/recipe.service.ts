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

  getAll(): Observable<Recipe[]> {
    return this.httpClient.
      get<Recipe[]>(environment.apiUrl + '/recipe/all');
  }

  //Save service
  saveRecipe(vm:Recipe): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/recipe/save',vm);
  }

  //Delete service
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/recipe/delete/' + id);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.httpClient.
      get<Recipe>(environment.apiUrl + '/recipe/find/' + id);
  }
}
