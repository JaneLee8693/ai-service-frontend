import { Routes } from '@angular/router';
import { RecommendationFormComponent } from './pages/recommendation-form/recommendation-form.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recommend', pathMatch: 'full' },
  { path: 'recommend', component: RecommendationFormComponent },
  { path: 'history', component: OrderHistoryComponent }
];
