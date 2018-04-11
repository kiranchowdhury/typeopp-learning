import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerContainerComponent } from './customer-container/customer-container.component';
import { CustomerRoutingModule } from '@app/customer/customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerContainerComponent]
})
export class CustomerModule { }
