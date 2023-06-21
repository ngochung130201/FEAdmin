import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Global/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Statistics';

  public getStatistical(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-statistical`);
  }
}
