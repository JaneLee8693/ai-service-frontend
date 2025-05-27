import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-recommendation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recommendation-form.component.html',
  styleUrl: './recommendation-form.component.css'
})
export class RecommendationFormComponent {
  userInput: string = '';
  recommendations: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private orderService: OrderService) {}

  get username(): string {
    return localStorage.getItem('username') || '';
  }

  submit() {
    if (!this.userInput.trim()) return;

    this.loading = true;
    this.error = null;

    this.orderService.getRecommendations(this.userInput, this.username).subscribe({
      next: (res) => {
        this.recommendations = res.data || [];
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch recommendations.';
        this.loading = false;
      }
    });
  }
}
