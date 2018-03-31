import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '@app/search-quotes/search-quote-state';

@Component({
  selector: 'anms-search-quote-container',
  templateUrl: './search-quote-container.component.html',
  styleUrls: ['./search-quote-container.component.scss']
})
export class SearchQuoteContainerComponent implements OnInit {
  // saved criteria
  savedCriteria: SearchCriteria[];

  constructor() { }

  ngOnInit() {
    /*
    * Mock methods - Get the saved criteria.. there are two predefined criterias that will always be there
    * 1. My Quotes
    * 2. Expiring Quotes
    */
   this.getSavedCriteria();
  }

  getSavedCriteria() {
     this.savedCriteria = [
       {id: 'MQ', name: 'My Quotes', sequence: 1, default: true},
       {id: 'EQ', name: 'Expiring Quotes', sequence: 2, searchOnName: 'EXPIRING_IN', searchOnValue: 5, fetchCount: 30}]
  }


}
