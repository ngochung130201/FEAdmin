import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Global/environment';
import { Observable } from 'rxjs';
import { TypePostCategory } from '../Types/post';


@Injectable({
  providedIn: 'root'
})
export class PostcategoryService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/PostCategory';

  public getAllPostCategory(): Observable<TypePostCategory[]> {
    return this.http.get<TypePostCategory[]>(`${this.baseUrl}`);
  }

  public deletePostCategory(slug: string): Observable<TypePostCategory[]> {
    return this.http.delete<TypePostCategory[]>(`${this.baseUrl}/${slug}`);
  }

  public createPostCategory(PostCategory: TypePostCategory): Observable<any> {
    return this.http.post<number>(`${this.baseUrl}`, PostCategory);
  }

  public getPostCategory(slug: string): Observable<TypePostCategory> {
    return this.http.get<TypePostCategory>(`${this.baseUrl}/${slug}`);
  }

  public updatePostCategory(slug: string, data: TypePostCategory) {
    return this.http.put(`${this.baseUrl}/${slug}`, data);
  }

  public deletePostCategoryAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
