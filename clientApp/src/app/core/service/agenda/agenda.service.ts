import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseVM } from '../../models/common/responseVm.model';
import { Agenda} from '../../models/serviceAndSchedule/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Agenda[]> {
    return this.httpClient.
      get<Agenda[]>(environment.apiUrl + '/agenda/all');
  }

  //Save agenda
  saveAgenda(vm:AgendaService): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/agenda/save',vm);
  }

  //Delete agenda
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/agenda/delete/' + id);
  }

  getAssistanceById(id: number): Observable<AgendaService> {
    return this.httpClient.
      get<AgendaService>(environment.apiUrl + '/agenda/find/' + id);
  }
}


