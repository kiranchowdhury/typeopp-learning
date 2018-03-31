import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { LoginGuard } from '../core/guard/login.guard';
import { AuthGuard } from '@app/core/guard/auth.guard';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard, AuthGuard],
    data: { title: 'Dashboard' }
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
