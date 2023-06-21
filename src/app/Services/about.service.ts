import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Global/environment';
import { Observable } from 'rxjs';
import { TypeAbout } from '../Types/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/About';

  public putAbout(id:number,data:any): Observable<TypeAbout> {
    return this.http.put<TypeAbout>(`${this.baseUrl}/${id}`,data);
  }
  public getAbout(id:number): Observable<TypeAbout> {
    return this.http.get<TypeAbout>(`${this.baseUrl}/${id}`);
  }
}
