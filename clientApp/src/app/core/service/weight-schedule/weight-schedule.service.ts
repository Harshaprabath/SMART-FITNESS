import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeightSchedule } from 'src/app/core/models/weightSchedule/weightSchedule'
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';

@Injectable({
  providedIn: 'root'
})
export class WeightScheduleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<WeightSchedule[]> {
    return this.httpClient.
      get<WeightSchedule[]>(environment.apiUrl + '/weight/schedule/all');
  }

  saveWeightSchedule(vm:WeightSchedule): Observable<ResponseVM> {
    return this.httpClient.
      post<ResponseVM>
      (environment.apiUrl + '/weight/schedule/save',vm);
  }

  deleteWeightSchedule(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/weight/schedule/delete/' + id);
  }

  getWeightScheduleById(id: number): Observable<WeightSchedule> {
    return this.httpClient.
      get<WeightSchedule>(environment.apiUrl + '/weight/schedule/find/' + id);
  }
}





