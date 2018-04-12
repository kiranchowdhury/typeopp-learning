import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { MessageResoureService } from './common/message-resoure.service';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


import { UtilService } from './common/util.service';

import { HeaderComponent } from './layouts/header/header.component';
import { SidenaveComponent } from './layouts/sidenave/sidenave.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
// import { CustomerModule } from './customer/customer.module';
// import { TrainingModule } from './training/training.module';
import { HowtoComponent } from './howto/howto.component';
import { FaqComponent } from './faq/faq.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
// import { SubscriptionsModule } from './subscriptions/subscriptions.module';
// import { UserListModule } from './user-list/user-list.module';
import { CertificatesComponent } from './certificates/certificates.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';



@NgModule({
  imports: [
    // angular
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // core & shared
    CoreModule,
    SharedModule,

    // features
    // StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    // CustomerModule,

   // TrainingModule,

  //  SubscriptionsModule,

  //  UserListModule,
  ],
  entryComponents: [
    AppComponent,
    LoginDialogComponent,
    SignupDialogComponent],
  declarations: [
    AppComponent,
   // WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    SidenaveComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    WelcomeComponent,
    HowtoComponent,
    FaqComponent,
    ProfilePageComponent,
    CertificatesComponent,
    InvoiceListComponent],
  providers: [
      MessageResoureService,
      UtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
