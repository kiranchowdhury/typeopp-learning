import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { SearchResult } from '@app/search-quotes/mock/refData';

@Component({
  selector: 'anms-search-result-grid',
  templateUrl: './search-result-grid.component.html',
  styleUrls: ['./search-result-grid.component.scss']
})
export class SearchResultGridComponent implements OnInit {

  gridOptions: GridOptions;
  showGrid: boolean;
  rowData: any[];
  // rowHeight: any;
  columnDefs: any[];
  rowCount: string;
  gridApi;
  gridColumnApi;
  constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.rowData = SearchResult.RESULTS;
        this.createColumnDefs();
        this.showGrid = true;
        // this.rowHeight= '12px';
        // this.gridOptions.dateComponentFramework = DateComponent;
        // this.gridOptions.defaultColDef = {
        //     headerComponentFramework : <{new(): HeaderComponentComponent}>HeaderComponentComponent,
        //     headerComponentParams : {
        //         menuIcon: 'fa-bars'
        //     }
        // }

  }

  ngOnInit() {
  }

  private createColumnDefs() {
    this.columnDefs = [
    {
      headerName: '#', width: 60, checkboxSelection: true, suppressSorting: true, pinned: 'left',
      menuTabs: ['generalMenuTab']
    },
    {
      headerName: 'Quote Id', field: 'quoteid',
      width: 150, pinned: 'left',
      menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
      headerName: 'Country', field: 'ctrycode',
      width: 150,
      menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'Quote Type', field: 'creatortype',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'EU Customer', field: 'ctmttcuccompanyname1',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
        rowGroup: true
    },
    {
        headerName: 'Quote Status', field: 'quotestatus',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'Order Status', field: 'orderstatus',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'Brand', field: 'brandcode',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'List Price', field: 'listprice',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'Quoted Price', field: 'approvedprice',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'Tier1 Name', field: 'ctmttcubcompanyname1',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'Tier2 Name', field: 'ctmttcudcompanyname1',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    },
    {
        headerName: 'Creation Date', field: 'ctmttdattranscreatedate',
        width: 150,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab']
    }]
  }
  private calculateRowCount() {
    if (this.gridOptions.api && this.rowData) {
        const model = this.gridOptions.api.getModel();
        const totalRows = this.rowData.length;
        const processedRows = model.getRowCount();
        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
    }
}
    private onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }
    autoSizeAll() {
        const allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function(column) {
          allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds);
      }
    public onReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.autoSizeAll();
        console.log('onReady');
        // params.api.sizeColumnsToFit();
        this.calculateRowCount();
    }

    private onCellClicked($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellValueChanged($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    }

    private onCellDoubleClicked($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellContextMenu($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellFocused($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    }

    private onRowSelected($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    }

    private onSelectionChanged() {
        console.log('selectionChanged');
    }

    private onBeforeFilterChanged() {
        console.log('beforeFilterChanged');
    }

    private onAfterFilterChanged() {
        console.log('afterFilterChanged');
    }

    private onFilterModified() {
        console.log('onFilterModified');
    }

    private onBeforeSortChanged() {
        console.log('onBeforeSortChanged');
    }

    private onAfterSortChanged() {
        console.log('onAfterSortChanged');
    }

    private onVirtualRowRemoved($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    }

    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    }

    public onQuickFilterChanged($event) {
        console.log('onQuickFilterChanged');
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    private onColumnEvent($event) {
        console.log('onColumnEvent: ' + $event);
    }
}
