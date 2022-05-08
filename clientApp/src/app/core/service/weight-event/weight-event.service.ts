import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeightEvent } from 'src/app/core/models/weightEvent/weightEvent'
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';

@Injectable({
  providedIn: 'root'
})
export class WeightEventService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<WeightEvent[]> {
    return this.httpClient.
      get<WeightEvent[]>(environment.apiUrl + '/weight/event/all');
  }

  saveWeightEvent(vm:WeightEvent): Observable<ResponseVM> {
    return this.httpClient.
      post<ResponseVM>
      (environment.apiUrl + 'weight/event/save',vm);
  }

  deleteWeightEvent(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + 'weight/event/delete/' + id);
  }

  getWeightEventById(id: number): Observable<WeightEvent> {
    return this.httpClient.
      get<WeightEvent>(environment.apiUrl + 'weight/event/find/' + id);
  }

}






