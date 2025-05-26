import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getRecommendations(userInput: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/ai/recommend`, {
      text: userInput
    });
  }

  getOrderHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/orders`);
  }

  getGroupedOrders(): Observable<Record<string, any[]>> {
    return this.http.get<Record<string, any[]>>(`${this.baseUrl}/orders/grouped`);
  }

  deletePrompt(prompt: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/orders/grouped/${encodeURIComponent(prompt)}`);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/orders/${id}`);
  }
}
