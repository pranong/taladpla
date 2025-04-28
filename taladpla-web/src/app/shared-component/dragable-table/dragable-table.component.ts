import { Component, OnInit, HostListener, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tpl-dragable-table',
  templateUrl: './dragable-table.component.html',
  styleUrls: ['./dragable-table.component.css']
})
export class DragableTableComponent implements OnInit {
  @ViewChild('dragArea') myDiv!: ElementRef;

  @Input() items: any[] = [];
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
  @Input() 
  set tableConfigParam(value: any[]) {
    this.tableConfig = value
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      this.searchVisible[element.valueKey] = false
      this.searchText[element.valueKey] = ''
      this.sortStatus[element.valueKey] = 'normal'
    }
  };
  tableConfig: any[] = []

  @Output() eventResult = new EventEmitter<any>();

  constructor() { }

  

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.myDiv?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clearAllSelect();
      this.eventResult.emit(this.items);
    }
  }

  ngOnInit(): void {

  }

  documents: any[] = [];
  selected: any[] = [];

  isMouseDown: boolean = false;
  firstDraggedItemIndex: number = -1;
  lastDraggedItemIndex: any = -1;


  clearAllSelect() {
    this.items.map(e => {
      e.isSelected = false
      return e;
    })
  }

  onMouseUpOnItem(index?: number) {
    console.log('onMouseUpOnItem', index)
    if (this.isMouseDown && index == -1) {
      this.clearAllSelect();
    } else if (this.isMouseDown && this.firstDraggedItemIndex == this.lastDraggedItemIndex) {
      this.clearAllSelect();
      this.items[this.firstDraggedItemIndex].isSelected = true
    }
    this.isMouseDown = false;
    this.lastDraggedItemIndex = undefined;

    this.eventResult.emit(this.items);
  }

  onMouseDownOnItem(index: number) {
    // console.log('onMouseDownOnItem', index)
    this.isMouseDown = true;
    this.firstDraggedItemIndex = index;
    this.lastDraggedItemIndex = this.firstDraggedItemIndex;
  }

  onMouseEnterOnItem(index: number) {
    // console.log('onMouseEnterOnItem', index)
    if (this.isMouseDown) {
      this.lastDraggedItemIndex = index;
      this.selectRowsInDraggedRange();
    }
  }

  // onContainerMouseUp() {
  //   console.log('onContainerMouseUp')
  //   this.isMouseDown = false;
  //   this.lastDraggedItemIndex = undefined;
  // }

  selectRowsInDraggedRange() {
    console.log('selectRowsInDraggedRange')
    const startIndex = Math.min(this.firstDraggedItemIndex, this.lastDraggedItemIndex);
    const endIndex = Math.max(this.firstDraggedItemIndex, this.lastDraggedItemIndex);
    console.log('startIndex', startIndex)
    console.log('endIndex', endIndex)
    this.clearAllSelect();
    for (let itemIndex = startIndex; itemIndex <= endIndex; itemIndex++) {
      this.items[itemIndex].isSelected = !this.items[itemIndex].isSelected ? true : this.items[itemIndex].isSelected;
    }
    this.eventResult.emit(this.items);
  }




  // filteredData: any[] = [...this.originalData]; // we manually control filtering

  searchVisible: { [key: string]: boolean } = {};
  searchText: { [key: string]: string } = {};
  sortStatus: { [key: string]: string } = {};

  toggleSearch(columnData: any): void {
    this.searchVisible[columnData.valueKey] = !this.searchVisible[columnData.valueKey];
  }
  toggleSort(columnData: any): void {
    if (this.sortStatus[columnData.valueKey] == 'asc') {
      this.sortStatus[columnData.valueKey] = 'normal'
    } else if (this.sortStatus[columnData.valueKey] == 'desc') {
      this.sortStatus[columnData.valueKey] = 'asc'
    } else if (this.sortStatus[columnData.valueKey] == 'normal') {
      this.sortStatus[columnData.valueKey] = 'desc'
    }
    this.applySort(columnData.valueKey)
  }

  clearSearch(column: string): void {
    this.searchText[column] = '';
    this.searchVisible[column] = false;
    this.applyFilter();
  }

  applyFilter(): void {
    this.eventResult.emit({type: 'filterColumn', data: this.searchText });
  }
  applySort(column: string): void {
    this.eventResult.emit({type: 'sortColumn', data: {sortType: this.sortStatus[column], column} });
  }
}
