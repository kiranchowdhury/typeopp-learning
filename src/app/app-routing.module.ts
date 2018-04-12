import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CustomerContainerComponent } from '@app/customer/customer-container/customer-container.component';
import { HowtoComponent } from '@app/howto/howto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    // canActivate: [LoginGuard],
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'customers',
    // component: CustomerContainerComponent,
    // data: {
    //   title: 'Customers'
    // }
    loadChildren: './customer/customer.module#CustomerModule'
  },
  {
    path: 'howto',
    component: HowtoComponent,
    data: {
      title: 'How to'
    }
  }
  // {
  //   path: 'settings',
  //   component: SettingsComponent,
  //   data: {
  //     title: 'Settings'
  //   }
  // },
  // // {
  // //   path: 'examples',
  // //   loadChildren: 'app/examples/examples.module#ExamplesModule'
  // // },
  // {
  //   path: '**',
  //   redirectTo: 'welcome'
  // }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
