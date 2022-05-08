import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weight } from 'src/app/core/models/weight/weight';
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Weight[]> {
    return this.httpClient.
      get<Weight[]>(environment.apiUrl + '/weight/all');
  }

  saveWeight(vm:Weight): Observable<ResponseVM> {
    return this.httpClient.
      post<ResponseVM>
      (environment.apiUrl + '/weight/save',vm);
  }

  deleteWaight(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/weight/delete/' + id);
  }

  getWeightById(id: number): Observable<Weight> {
    return this.httpClient.
      get<Weight>(environment.apiUrl + '/weight/find/' + id);
  }
}
