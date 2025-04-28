import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tlp-table',
  templateUrl: './tlp-table.component.html',
  styleUrls: ['./tlp-table.component.css']
})
export class TlpTableComponent implements OnInit {
  @Input() tableConfig: any[] = [];
  @Input()
  set dataRow(rows: any[]) {
    console.log('rows', rows)
    this.originalRows = JSON.parse(JSON.stringify(rows))
    this.items = rows
    this.updatePagedItems();
  }

  constructor() { }

  items: any[] = [];
  pagedItems: string[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  pageSizes: number[] = [10, 50, 100, 1000];
  totalPages: number = 0;
  originalRows: any[] = []

  ngOnInit(): void {
    // // Dummy data
    // this.items = Array.from({ length: 123 }, (_, i) => `Item ${i + 1}`);
    // this.items
    // for (let i = 0; i < 123; i++) {
    //   this.items[i] = {
    //     name: `Name ${ i + 1 }`,
    //     age: `Age ${ i + 1 }`
    //   }
      
    // }
    // this.updatePagedItems();
  }

  updatePagedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedItems = this.items.slice(start, end);
    console.log('this.pagedItems', this.pagedItems)
    this.totalPages = Math.ceil(this.items.length / this.pageSize);
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.updatePagedItems();
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 1; // Reset to first page
    this.updatePagedItems();
  }

  eventResult($event: any) {
    console.log('event callback', $event)
    if ($event.type == 'filterColumn') {
      this.items = this.originalRows.filter(item => {
        return Object.keys($event.data).every(column => {
          const search = $event.data[column]?.toLowerCase();
          if (!search) return true; // No search for this column
          return item[column]?.toString().toLowerCase().includes(search);
        });
      });
    } else if ($event.type == 'sortColumn') {

      this.items = this.items.sort((a, b) => {
        if (['asc','desc'].includes($event.data.sortType)) {
          const result = a[$event.data.column].localeCompare(b[$event.data.column]);
          return $event.data.sortType == 'asc' ? result : -result;
        } else {
          const result = a['poId'].localeCompare(b['poId']);
          return result;
        }
      });
      console.log('this.items', this.items)
    }
    this.updatePagedItems()
  }

}
