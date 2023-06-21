import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypePosts } from '../Types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7177/api/posts';

  // int currentPageNumber, int pageSize,
  //string sort, string dir, string where, string search
  public getAllpost(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string,search?:string,where?:string): Observable<any> {
    
    return this.http.get<TypePosts[]>(`${this.baseUrl}?currentPageNumber=${currentPageNumber}&pageSize=${pageSize}&sort=${sort}&typeSort=${typeSort}
    &where=${where}&search=${search}`);
  }

  public deletepost(slug: string): Observable<TypePosts[]> {
    return this.http.delete<TypePosts[]>(`${this.baseUrl}/${slug}`);
  }

  public createpost(data: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, data);
  }

  public getpost(slug: string): Observable<TypePosts> {
    return this.http.get<TypePosts>(`${this.baseUrl}/${slug}`);
  }

  public updatepost(slug: string, data: any) {
    return this.http.put(`${this.baseUrl}/${slug}`, data);
  }

  public deletepostAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
