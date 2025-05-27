import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-enter-name',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.css']
})
export class EnterNameComponent {
  username = '';

  constructor(private router: Router) {}

  continue() {
    if (this.username.trim()) {
      localStorage.setItem('username', this.username.trim());
      this.router.navigate(['/recommend']);
    }
  }
}
