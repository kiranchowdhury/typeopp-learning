import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { IHeaderParams } from 'ag-grid';
import {IHeaderAngularComp} from 'ag-grid-angular/main';
interface MyParams extends IHeaderParams {
  menuIcon: string;
}
@Component({
  selector: 'anms-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements IHeaderAngularComp, OnDestroy {
  public params: MyParams;
  public sorted: string;
  private elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  agInit(params: MyParams): void {
    this.params = params;
    this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    this.onSortChanged();
}
onMenuClick() {
  this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
}
private querySelector(selector: string) {
  return <HTMLElement>this.elementRef.nativeElement.querySelector(
      '.customHeaderMenuButton', selector);
}
onSortRequested(order, event) {
  this.params.setSort(order, event.shiftKey);
};

onSortChanged() {
  if (this.params.column.isSortAscending()) {
      this.sorted = 'asc'
  } else if (this.params.column.isSortDescending()) {
      this.sorted = 'desc'
  } else {
      this.sorted = ''
  }
};
ngOnDestroy() {
  console.log(`Destroying HeaderComponent`);
}
}
