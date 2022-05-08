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

  //get all diet plans service
  getAll(): Observable<Plan[]> {
    return this.httpClient.
      get<Plan[]>(environment.apiUrl + '/plan/all');
  }

  //save diet plans service
  savePlan(vm:Plan): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/plan/save',vm);
  }

  //delete diet plans service
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/plan/delete/' + id);
  }

  //get a single diet plan service
  getPlanById(id: number): Observable<Plan> {
    return this.httpClient.
      get<Plan>(environment.apiUrl + '/plan/find/' + id);
  }

  //generate diet plan list report
  downloadPlanListReport(): Observable<any> {
    return this.httpClient.get<any>
    (environment.apiUrl +'/plan/export/pdf');
  }
}
