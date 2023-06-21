import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Global/environment';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Orders';
  public getAllOrder(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string,search?:string,where?:string): Observable<any> {
    
    return this.http.get<any[]>(`${this.baseUrl}?currentPageNumber=${currentPageNumber}&pageSize=${pageSize}&sort=${sort}&typeSort=${typeSort}
    &where=${where}&search=${search}`);
  }

  public deleteOrder(slug: string): Observable<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/${slug}`);
  }
  public getOrderById(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${orderId}`);
  }
  public getOrderDetailById(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/OrderDetail/${orderId}`);
  }
  public updateOrder(orderId: string,body:any ): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${orderId}`,body);
  }
  public getMonthlySales(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/monthly-sales`);
  }
  public exportToCSV(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/export-csv`, { responseType: 'blob' });
  }
  public exportMonthlySalesToCSV(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/export-monthly-sales-csv`, { responseType: 'blob' });
  }
 
}
