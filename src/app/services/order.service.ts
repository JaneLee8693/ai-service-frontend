import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getRecommendations(prompt: string, username: string, uuid: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/ai/recommend`, {
      prompt,
      username,
      uuid
    });
  }

  getOrderHistory(): Observable<any[]> {
    const username = localStorage.getItem('username') || '';
    const uuid = localStorage.getItem('uuid') || '';
    return this.http.get<any[]>(`${this.baseUrl}/orders`, {
      params: { username, uuid }
    });
  }

  getGroupedOrders(): Observable<Record<string, any[]>> {
    const username = localStorage.getItem('username') || '';
    const uuid = localStorage.getItem('uuid') || '';
    return this.http.get<Record<string, any[]>>(`${this.baseUrl}/orders/grouped`, {
      params: { username, uuid }
    });
  }

  deletePrompt(prompt: string): Observable<void> {
    const username = localStorage.getItem('username') || '';
    const uuid = localStorage.getItem('uuid') || '';
    return this.http.delete<void>(
      `${this.baseUrl}/orders/grouped/${encodeURIComponent(prompt)}`,
      { params: { username, uuid } }
    );
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/orders/${id}`);
  }
}
