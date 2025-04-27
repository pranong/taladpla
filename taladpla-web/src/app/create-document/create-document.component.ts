import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  @ViewChild('dragArea') myDiv!: ElementRef;

  constructor() { }

  rowList: any[] = [];

  tableConfig: any[] = [
    {
      columnType: "checkBox",
      columnName: '',
      valueKey: "isSelected",
      style: "",
    },
    {
      columnType: "text",
      columnName: 'Name',
      valueKey: "name",
      style: "",
    },
    {
      columnType: "text",
      columnName: 'Age',
      valueKey: "age",
      style: "",
    },
    // {
    //   columnType: "input",
    //   valueKey: "isSelected",
    //   style: "",
    // },
  ]

  ngOnInit(): void {
    for (let i = 0; i < 123; i++) {
      this.rowList[i] = {
        isSelected: false,
        name: `Name ${i + 1}`,
        age: `Age ${i + 1}`
      }
    }
  }

}
