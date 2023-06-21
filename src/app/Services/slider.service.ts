import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../Global/environment';
import { TySlider } from '../Types/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Slider';

  public getAllSlider(): Observable<TySlider[]> {
    return this.http.get<TySlider[]>(`${this.baseUrl}`);
  }

  public deleteSlider(id: number): Observable<TySlider[]> {
    return this.http.delete<TySlider[]>(`${this.baseUrl}/${id}`);
  }

  public createSlider(Slider: TySlider): Observable<any> {
    return this.http.post<number>(`${this.baseUrl}`, Slider);
  }

  public getSlider(id: number): Observable<TySlider> {
    return this.http.get<TySlider>(`${this.baseUrl}/${id}`);
  }
  public updateslider(id: number, data: TySlider) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

}
