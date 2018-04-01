import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: 'welcome',
  //   component: WelcomeComponent,
  //   // canActivate: [LoginGuard],
  //   data: {
  //     title: 'Welcome'
  //   }
  // },
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
