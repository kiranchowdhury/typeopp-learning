import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
