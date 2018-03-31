import { Routes, RouterModule } from '@angular/router';
import { SearchquotesComponent } from './searchquotes/searchquotes/searchquotes.component';
import { MyquotesComponent } from './myquotes/myquotes/myquotes.component';
import { NgModule } from '@angular/core';
import { LoginGuard } from '../core/guard/login.guard';
import { AuthGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'searchquotes',
    component: SearchquotesComponent,
    canActivate: [LoginGuard, AuthGuard],
    data: { title: 'Search Quotes'}
  },
  {
    path: 'myquotes',
    component: MyquotesComponent,
    canActivate: [LoginGuard, AuthGuard],
    data: { title: 'My Quotes'}
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteActionRouterModule {}
