import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

  submit() {
    this.loading = true;
    this.error = null;
    this.recommendations = [];

    const body = { input: this.userInput };

    this.http.post<any>('http://localhost:8081/api/ai/recommend', body).subscribe({
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
