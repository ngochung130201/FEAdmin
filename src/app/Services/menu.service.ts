import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { TyMenu, TypeMenuCreate } from '../Types/menu';
import { environment } from '../Global/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Menu';

  public getAllMenu(): Observable<TyMenu[]> {
    return this.http.get<TyMenu[]>(`${this.baseUrl}`);
  }

  public deleteMenu(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  public createMenu(data: TypeMenuCreate): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  public getMenu(id: number): Observable<TyMenu> {
    return this.http.get<TyMenu>(`${this.baseUrl}/${id}`);
  }

  public updateMenu(id: number, data: TyMenu) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteMenuAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
