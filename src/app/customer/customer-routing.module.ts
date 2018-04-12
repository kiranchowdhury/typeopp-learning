import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerContainerComponent } from '@app/customer/customer-container/customer-container.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerContainerComponent,
    children: []
  }
  // {
  //   path: '',
  //   component: ExamplesComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'todos',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'todos',
  //       component: TodosComponent,
  //       data: {
  //         title: 'Todos'
  //       }
  //     },
  //     {
  //       path: 'stock-market',
  //       component: StockMarketComponent,
  //       data: {
  //         title: 'Stock Market'
  //       }
  //     },
  //     {
  //       path: 'theming',
  //       component: ParentComponent,
  //       data: {
  //         title: 'Theming'
  //       }
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
