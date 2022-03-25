import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from 'src/app/core/models/nutrition/plan';
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Plan[]> {
    return this.httpClient.
      get<Plan[]>(environment.apiUrl + '/plan/all');
  }

  //Save service
  savePlan(vm:Plan): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/plan/save',vm);
  }

  //Delete service
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/plan/delete/' + id);
  }

  getPlanById(id: number): Observable<Plan> {
    return this.httpClient.
      get<Plan>(environment.apiUrl + '/plan/find/' + id);
  }
}