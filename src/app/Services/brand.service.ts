import { Injectable } from '@angular/core';
import { TyBrand } from '../Types/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../Global/environment';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Brand';

  public getAllBrand(): Observable<TyBrand[]> {
    return this.http.get<TyBrand[]>(`${this.baseUrl}`);
  }

  public deleteBrand(id: number): Observable<TyBrand[]> {
    return this.http.delete<TyBrand[]>(`${this.baseUrl}/${id}`);
  }

  public createBrand(brand: TyBrand): Observable<any> {
    return this.http.post<number>(`${this.baseUrl}`, brand);
  }

  public getBrand(id: number): Observable<TyBrand> {
    return this.http.get<TyBrand>(`${this.baseUrl}/${id}`);
  }
  UploadImage(inpudata:any){
    return this.http.post("https://localhost:44308/api/Product/UploadImage",inpudata,{
      reportProgress:true,
      observe:'events'
    });
  }
  RemoveImage(code:any){
    return this.http.get("https://localhost:44308/api/Product/RemoveImage/"+code);
  }
  public updateBrand(id: number, data: TyBrand) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteBrandAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
