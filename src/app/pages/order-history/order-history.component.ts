import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})

export class OrderHistoryComponent implements OnInit {
  groupedOrders: { [prompt: string]: any[] } = {};
  loading = false;
  error: string | null = null;

  showModal = false;
  modalType: 'group' | 'item' | null = null;
  pendingPrompt = '';
  pendingItemId = '';
  deleting = false;
  toastMessage = '';
  toastType: 'success' | 'error' | '' = '';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.loading = true;
    this.orderService.getGroupedOrders().subscribe({
      next: (res) => {
        this.groupedOrders = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load order history';
        this.loading = false;
      }
    });
  }

  confirmDelete(type: 'group' | 'item', idOrPrompt: string) {
    this.modalType = type;
    this.showModal = true;
    this.pendingPrompt = type === 'group' ? idOrPrompt : '';
    this.pendingItemId = type === 'item' ? idOrPrompt : '';
  }

  cancelDelete() {
    this.showModal = false;
    this.modalType = null;
    this.pendingPrompt = '';
    this.pendingItemId = '';
  }

  proceedDelete() {
    this.deleting = true;

    const req$ =
      this.modalType === 'group'
        ? this.orderService.deletePrompt(this.pendingPrompt)
        : this.orderService.deleteItem(this.pendingItemId);

    req$.subscribe({
      next: () => {
        this.toastMessage = 'Deleted successfully';
        this.toastType = 'success';
        this.afterDelete();
      },
      error: () => {
        this.toastMessage = 'Delete failed';
        this.toastType = 'error';
        this.afterDelete();
      }
    });
  }

  private afterDelete() {
    this.deleting = false;
    this.showModal = false;
    this.pendingPrompt = '';
    this.pendingItemId = '';
    this.fetchOrders();
    setTimeout(() => (this.toastMessage = ''), 3000);
  }
}

