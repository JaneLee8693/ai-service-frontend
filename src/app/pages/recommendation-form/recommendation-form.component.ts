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


submit() {
  this.loading = true;
  this.error = null;
  this.recommendations = [];

  this.orderService.getRecommendations(this.userInput).subscribe({
    next: (res) => {
      this.recommendations = res.data || [];
      this.loading = false;
    },
    error: () => {
      this.error = 'Error occurred while fetching recommendations';
      this.loading = false;
    }
  });
}
}
