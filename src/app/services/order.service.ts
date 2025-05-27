import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getRecommendations(prompt: string, username: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/ai/recommend`, {
      prompt,
      username
    });
  }

  getOrderHistory(): Observable<any[]> {
    const username = localStorage.getItem('username') || '';
    return this.http.get<any[]>(`${this.baseUrl}/orders?username=${encodeURIComponent(username)}`);
  }

  getGroupedOrders(username: string): Observable<Record<string, any[]>> {
    return this.http.get<Record<string, any[]>>(`${this.baseUrl}/orders/grouped`, {
      params: { username }
    });
  }

  deletePrompt(prompt: string, username: string): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/orders/grouped/${encodeURIComponent(prompt)}`,
      {
        params: { username }
      }
    );
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/orders/${id}`);
  }
}
