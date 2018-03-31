import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './core/guard/login.guard';
import { SearchQuoteContainerComponent } from '@app/search-quotes/search-quote-container/search-quote-container.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Sign In'}
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [LoginGuard],
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    canActivate: [LoginGuard]
    // loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'searchquotes',
    component: SearchQuoteContainerComponent,
    canActivate: [LoginGuard],
    data: {
      title: 'Search quotes'
    }
  },
  // {
  //   path: 'searchquotes',
  //   // loadChildren: 'app/quoteactions/quoteactions.module#QuoteactionsModule'
  //   redirectTo: 'searchquotes',
  //   canActivate: [LoginGuard],
  // },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  },
  // {
  //   path: 'examples',
  //   loadChildren: 'app/examples/examples.module#ExamplesModule'
  // },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
