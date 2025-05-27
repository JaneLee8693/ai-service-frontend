import { Routes } from '@angular/router';
import { RecommendationFormComponent } from './pages/recommendation-form/recommendation-form.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { EnterNameComponent } from './pages/enter-name/enter-name.component';


export const routes: Routes = [
  { path: '', component: EnterNameComponent },
  { path: 'recommend', loadComponent: () => import('./pages/recommendation-form/recommendation-form.component').then(m => m.RecommendationFormComponent) },
  { path: 'history', loadComponent: () => import('./pages/order-history/order-history.component').then(m => m.OrderHistoryComponent) },

];
