import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListRoutingModule } from '@app/user-list/user-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  declarations: [UserContainerComponent]
})
export class UserListModule { }
