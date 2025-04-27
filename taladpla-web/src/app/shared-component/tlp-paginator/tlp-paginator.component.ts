import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tlp-paginator',
  templateUrl: './tlp-paginator.component.html',
  styleUrls: ['./tlp-paginator.component.css']
})
export class TlpPaginatorComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @Input() location: string = 'bottom';

  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalItems: number = 0;
  @Input() pageSizes: number[] = [10, 50, 100, 1000];

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  get showingRange(): string {
    if (this.totalItems === 0) {
      return 'Showing 0 to 0 of 0 entries';
    }

    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.totalItems);
    return `Showing ${start} to ${end} of ${this.totalItems} entries`;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  firstPage() {
    this.pageChange.emit(1);
  }

  lastPage() {
    this.pageChange.emit(this.totalPages);
  }

  goToPage(page: number) {
    this.pageChange.emit(page);
  }

  onPageSizeChange(event: any) {
    this.pageSizeChange.emit(+event.target.value);
  }

  generatePageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    if (this.totalPages <= 10) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 5) {
        for (let i = 1; i <= 7; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages - 1);
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 4) {
        pages.push(1);
        pages.push(2);
        pages.push('...');
        for (let i = this.totalPages - 6; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(2);
        pages.push('...');
        for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages - 1);
        pages.push(this.totalPages);
      }
    }
    return pages;
  }

}
