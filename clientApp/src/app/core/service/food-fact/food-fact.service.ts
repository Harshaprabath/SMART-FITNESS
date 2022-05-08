import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodFact } from 'src/app/core/models/nutrition/food-fact';
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';

@Injectable({
  providedIn: 'root'
})
export class FoodFactService {

  constructor(private httpClient: HttpClient) { }

  //get all food fact details service
  getAll(): Observable<FoodFact[]> {
    return this.httpClient.
      get<FoodFact[]>(environment.apiUrl + '/foodfact/all');
  }

  //save food fact deails service
  saveFoodFact(vm:FoodFact): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/foodfact/save',vm);
  }

  //delete food fact details service
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/foodfact/delete/' + id);
  }

  //get a single food fact detail service
  getFoodFactById(id: number): Observable<FoodFact> {
    return this.httpClient.
      get<FoodFact>(environment.apiUrl + '/foodfact/find/' + id);
  }

  //search food fact details service
  search(foodName: string): Observable<FoodFact[]> {
    return this.httpClient.
      get<FoodFact[]>(environment.apiUrl + '/foodfact/Search/' + foodName);     
  }
}
