import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsContainerComponent } from './subscriptions-container/subscriptions-container.component';
import { SubscriptionsRoutingModule } from '@app/subscriptions/subscriptions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ],
  declarations: [SubscriptionsContainerComponent]
})
export class SubscriptionsModule { }
