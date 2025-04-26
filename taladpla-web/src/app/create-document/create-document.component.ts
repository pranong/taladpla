import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  @ViewChild('dragArea') myDiv!: ElementRef;

  constructor() { }

  rowList: any[] = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jake', age: 28 },
    { name: 'Jill', age: 22 },
  ];

  ngOnInit(): void {
    
  }

  dragableTableResult($event: any) {
    console.log('callback: dragableTableResult', $event)
    console.log('rowList', this.rowList)
  }
}
