import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';
import { DashboardPage } from '../dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'notifications',
    loadChildren: () => import('../notifications/notifications-routing.module').then(m => m.NotificationsPageRoutingModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('../user-edit/user-edit-routing.module').then(m => m.UserEditPageRoutingModule)
  },
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
