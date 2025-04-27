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
  @Input() tableConfig: any[] = [];

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
}
