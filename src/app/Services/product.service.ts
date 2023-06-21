import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeProducts } from '../Types/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7177/api/Products';

  // int currentPageNumber, int pageSize,
  //string sort, string dir, string where, string search
  public getAllProduct(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string,search?:string,where?:string): Observable<any> {
    
    return this.http.get<TypeProducts[]>(`${this.baseUrl}?currentPageNumber=${currentPageNumber}&pageSize=${pageSize}&sort=${sort}&typeSort=${typeSort}
    &where=${where}&search=${search}`);
  }

  public deleteProduct(slug: string): Observable<TypeProducts[]> {
    return this.http.delete<TypeProducts[]>(`${this.baseUrl}/${slug}`);
  }

  public createProduct(data: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, data);
  }

  public getProduct(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${slug}`);
  }

  public updateProduct(slug: string, data: any) {
    return this.http.put(`${this.baseUrl}/${slug}`, data);
  }

  public deleteProductAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
