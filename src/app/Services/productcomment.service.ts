import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeProductComments } from '../Types/ProductComments';







@Injectable({
  providedIn: 'root'
})
export class ProductCommentcommentService {


  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7177/api/ProductComment';

  // int currentPageNumber, int pageSize,
  //string sort, string dir, string where, string search
  public getAllProductComment(): Observable<any> {
    
    return this.http.get<TypeProductComments[]>(`${this.baseUrl}`)
  }

  public deleteProductComment(slug: string): Observable<TypeProductComments[]> {
    return this.http.delete<TypeProductComments[]>(`${this.baseUrl}/${slug}`);
  }

  public createProductComment(data: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, data);
  }

  public getProductComment(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${slug}`);
  }

  public updateProductComment(slug: string, data: any) {
    return this.http.put(`${this.baseUrl}/${slug}`, data);
  }

  public deleteProductCommentAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
