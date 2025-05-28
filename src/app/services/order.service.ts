import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  getRecommendations(prompt: string, username: string, uuid: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/ai/recommend`, {
      prompt,
      username,
      uuid
    });
  }

  getOrderHistory(): Observable<any[]> {
    const username = localStorage.getItem('username') || '';
    const uuid = localStorage.getItem('uuid') || '';
    return this.http.get<any[]>(`${environment.apiBaseUrl}/orders`, {
      params: { username, uuid }
    });
  }

  getGroupedOrders(): Observable<Record<string, any[]>> {
    const username = localStorage.getItem('username') || '';
    const uuid = localStorage.getItem('uuid') || '';
    return this.http.get<Record<string, any[]>>(`${environment.apiBaseUrl}/orders/grouped`, {
      params: { username, uuid }
    });
  }

  deletePrompt(prompt: string): Observable<void> {
    const username = localStorage.getItem('username') || '';
    const uuid = localStorage.getItem('uuid') || '';
    return this.http.delete<void>(
      `${environment.apiBaseUrl}/orders/grouped/${encodeURIComponent(prompt)}`,
      { params: { username, uuid } }
    );
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/orders/${id}`);
  }
}
