import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchQuoteContainerComponent } from './search-quote-container/search-quote-container.component';
import { SearchCriteriaComponent } from '../search-quotes/search-criteria/search-criteria.component';
import { ManagSearchCriteriaComponent } from './manag-search-criteria/manag-search-criteria.component';
import { EditCriteriaComponent } from './edit-criteria/edit-criteria.component';
import { AddCriteriaComponent } from './add-criteria/add-criteria.component';
import { SearchResultGridComponent } from './search-result-grid/search-result-grid.component';
import { SearchResultHeaderComponent } from './search-result-header/search-result-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    SearchQuoteContainerComponent,
    SearchCriteriaComponent,
    ManagSearchCriteriaComponent,
    EditCriteriaComponent,
    AddCriteriaComponent,
    SearchResultGridComponent,
    SearchResultHeaderComponent
  ]
})
export class SearchQuotesModule { }
