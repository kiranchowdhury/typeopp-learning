import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsContainerComponent } from '@app/subscriptions/subscriptions-container/subscriptions-container.component';

const routes: Routes = [
    {
        path: '',
        component: SubscriptionsContainerComponent,
        children: []
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SubscriptionsRoutingModule {}

