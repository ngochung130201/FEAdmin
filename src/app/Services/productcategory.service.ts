import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Global/environment';
import { Observable } from 'rxjs';
import { TypeProductCategory } from '../Types/productCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/ProductCategory';

  public getAllProductCategory(): Observable<TypeProductCategory[]> {
    return this.http.get<TypeProductCategory[]>(`${this.baseUrl}`);
  }

  public deleteProductCategory(slug: string): Observable<TypeProductCategory[]> {
    return this.http.delete<TypeProductCategory[]>(`${this.baseUrl}/${slug}`);
  }

  public createProductCategory(ProductCategory: TypeProductCategory): Observable<any> {
    return this.http.post<number>(`${this.baseUrl}`, ProductCategory);
  }

  public getProductCategory(slug: string): Observable<TypeProductCategory> {
    return this.http.get<TypeProductCategory>(`${this.baseUrl}/${slug}`);
  }

  public updateProductCategory(slug: string, data: TypeProductCategory) {
    return this.http.put(`${this.baseUrl}/${slug}`, data);
  }

  public deleteProductCategoryAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
