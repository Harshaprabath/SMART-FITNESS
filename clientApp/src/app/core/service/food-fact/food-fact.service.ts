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

  getAll(): Observable<FoodFact[]> {
    return this.httpClient.
      get<FoodFact[]>(environment.apiUrl + '/foodfact/all');
  }

  //Save service
  saveFoodFact(vm:FoodFact): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/foodfact/save',vm);
  }

  //Delete service
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/foodfact/delete/' + id);
  }

  getFoodFactById(id: number): Observable<FoodFact> {
    return this.httpClient.
      get<FoodFact>(environment.apiUrl + '/foodfact/find/' + id);
  }

  search(foodName: string): Observable<FoodFact[]> {
    return this.httpClient.
      get<FoodFact[]>(environment.apiUrl + '/foodfact/Search/' + foodName);     
  }
}
