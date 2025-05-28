import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-enter-name',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.css']
})
export class EnterNameComponent {
  name: string = '';

  constructor(private router: Router) {}

  submitName() {
    if (!this.name.trim()) return; // Ensure name is not empty

    const newUuid = uuidv4();
    localStorage.setItem('username', this.name.trim());
    localStorage.setItem('uuid', newUuid); // new session UUID
    this.router.navigate(['/recommend']);
  }
}
