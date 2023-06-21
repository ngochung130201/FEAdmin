import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../Global/environment';
import { TySupplier } from '../Types/supplier';



@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Supplier';

  public getAllSupplier(): Observable<TySupplier[]> {
    return this.http.get<TySupplier[]>(`${this.baseUrl}`);
  }

  public deleteSupplier(id: number): Observable<TySupplier[]> {
    return this.http.delete<TySupplier[]>(`${this.baseUrl}/${id}`);
  }

  public createSupplier(Supplier: TySupplier): Observable<any> {
    return this.http.post<number>(`${this.baseUrl}`, Supplier);
  }

  public getSupplier(id: number): Observable<TySupplier> {
    return this.http.get<TySupplier>(`${this.baseUrl}/${id}`);
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
  public updateSupplier(id: number, data: TySupplier) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteSupplierAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
