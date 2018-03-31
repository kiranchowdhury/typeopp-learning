import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchquotesComponent } from './searchquotes/searchquotes/searchquotes.component';
import { MyquotesComponent } from './myquotes/myquotes/myquotes.component';
import { FormsModule } from '@angular/forms';
import { QuoteActionRouterModule } from './quoteactions-routing.module';
import { SearchQuoteGridComponent } from './searchquotes/search-quote-grid/search-quote-grid.component';
import { HeaderComponentComponent } from './searchquotes/header-component/header-component.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '@app/shared';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    QuoteActionRouterModule,
    AgGridModule.withComponents([
      // SearchquotesComponent,
      // SearchQuoteGridComponent,
      HeaderComponentComponent
    ])
  ],
  declarations: [SearchquotesComponent, MyquotesComponent, SearchQuoteGridComponent, HeaderComponentComponent]
})
export class QuoteactionsModule { }
