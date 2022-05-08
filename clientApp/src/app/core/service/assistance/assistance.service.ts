import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';
import { Assistance } from '../../models/serviceAndSchedule/assistance';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Assistance[]> {
    return this.httpClient.
      get<Assistance[]>(environment.apiUrl + '/assistance/all');
  }

  //Save assistance
  saveAssistance(vm:AssistanceService): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/assistance/save',vm);
  }

  //Delete assistance
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/assistance/delete/' + id);
  }

  getAssistanceById(id: number): Observable<AssistanceService> {
    return this.httpClient.
      get<AssistanceService>(environment.apiUrl + '/assistance/find/' + id);
  }
}


