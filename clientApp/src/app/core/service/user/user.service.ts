import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/models/user/user.model';
import { ResponseVM } from 'src/app/core/models/common/responseVm.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  
  login(username: string, password: string): Observable<User> {
    return this.httpClient.
      get<User>
        (environment.apiUrl + '/user/login/' + username+'/'+password);
        
  }

   //Save user service
   saveUser(vm:User): Observable<ResponseVM>  {
    return this.httpClient.
        post<ResponseVM> 
        (environment.apiUrl + '/user/save',vm);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.
      get<User>(environment.apiUrl + '/user/find/' + id);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.
      get<User[]>(environment.apiUrl + '/user/all');
  }
  
  delete(id: number): Observable<ResponseVM> {
    return this.httpClient.
      delete<ResponseVM>(environment.apiUrl + '/user/delete/' + id);
  }

  getCurrentUser(): Observable<User> {
    return this.httpClient.
      get<User>(environment.apiUrl + '/user/currentUser');
  }

  ChangePassword(id: number,password:string): Observable<User> {
    return this.httpClient.
      get<User>(environment.apiUrl + '/user/find/' + id +'/'+password);
  }

  downloadUserListReport(): Observable<any> {
    return this.httpClient.get<any>
    (environment.apiUrl +'/user/export/pdf');
  }

  search(name: string): Observable<User[]> {
    return this.httpClient.
      get<User[]>(environment.apiUrl + '/user/Search/' + name);     
  }

}
