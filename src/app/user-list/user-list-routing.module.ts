import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from '@app/user-list/user-container/user-container.component';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule {}
