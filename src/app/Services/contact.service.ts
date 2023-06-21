import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { TyMenu, TypeMenuCreate } from '../Types/menu';
import { environment } from '../Global/environment';
import { TypeContact } from '../Types/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Contact';

  public getAllContact(): Observable<TypeContact[]> {
    return this.http.get<TypeContact[]>(`${this.baseUrl}`);
  }

  public deleteContact(slug: string): Observable<TypeContact[]> {
    return this.http.delete<TypeContact[]>(`${this.baseUrl}/${slug}`);
  }

  public createContact(Contact: TypeContact): Observable<any> {
    return this.http.post<number>(`${this.baseUrl}`, Contact);
  }

  public getContact(id: number): Observable<TypeContact> {
    return this.http.get<TypeContact>(`${this.baseUrl}/${id}`);
  }

  public updateContact(slug: string, data: TypeContact) {
    return this.http.put(`${this.baseUrl}/${slug}`, data);
  }

  public deleteContactAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
