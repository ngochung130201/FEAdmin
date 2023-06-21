import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Global/environment';
import { Observable } from 'rxjs';
import { ChangePassword } from '../Types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl + '/Account';

  public getAllUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetUserNotCustomer`);
  }
  public deleteUser(id: number): Observable<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/${id}`);
  }

  public createUser(User: any): Observable<any> {
    return this.http.post<number>(`${this.baseUrl}`, User);
  }

  public getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/SignIn`, { email, password });
  }
  public getUserWithEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetUser?email=${email}`);
  }
  public changePasswordAsync(ChangePassword : ChangePassword){
    return this.http.post<any>(`${this.baseUrl}/ChangePasswordAsync`,ChangePassword);
  }
  public updateInfoAsync(email : string,User : any){
    return this.http.put<any>(`${this.baseUrl}/UpdateUser?email=${email}`,User);
  }
}
