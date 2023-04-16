import { Injectable } from '@angular/core';
import { TyBrand } from '../Types/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7177/api/Brand';

  public getAllBrand(): Observable<TyBrand[]> {
    return this.http.get<TyBrand[]>(`${this.baseUrl}`);
  }

  public deleteBrand(id: string): Observable<TyBrand[]> {
    return this.http.delete<TyBrand[]>(`${this.baseUrl}/${id}`);
  }

  public createBrand(data: TyBrand): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}`, data);
  }

  public getBrand(id: string): Observable<TyBrand> {
    return this.http.get<TyBrand>(`${this.baseUrl}/${id}`);
  }

  public updateBrand(id: string, data: TyBrand) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteBrandAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
