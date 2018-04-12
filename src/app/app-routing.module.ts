import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CustomerContainerComponent } from '@app/customer/customer-container/customer-container.component';
import { HowtoComponent } from '@app/howto/howto.component';
import { FaqComponent } from '@app/faq/faq.component';
import { InvoiceListComponent } from '@app/invoice-list/invoice-list.component';
import { ProfilePageComponent } from '@app/profile-page/profile-page.component';
import { CertificatesComponent } from '@app/certificates/certificates.component';

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
    path: 'certificates',
    component: CertificatesComponent,
    data: {
      title: 'Certificates'
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
    path: 'faq',
    component: FaqComponent,
    data: {
      title: 'FAQ'
    }
  },
  {
    path: 'howto',
    component: HowtoComponent,
    data: {
      title: 'How to'
    }
  },
  {
    path: 'invoices',
    component: InvoiceListComponent,
    data: {
      title: 'Invoices'
    }
  },
  {
    path: 'profiles',
    component: ProfilePageComponent,
    data: {
      title: 'Profiles'
    }
  },
  {
    path: 'subscriptions',
    loadChildren: './subscriptions/subscriptions.module#SubscriptionsModule'
  },
  {
    path: 'training',
    loadChildren: './training/training.module#TrainingModule'
  },
  {
    path: 'users',
    loadChildren: './user-list/user-list.module#UserListModule'
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
