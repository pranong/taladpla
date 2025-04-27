import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

import { SearchDocService } from '../service/search-doc/search-doc.service';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  @ViewChild('dragArea') myDiv!: ElementRef;

  constructor(private api: SearchDocService) { }

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
    
  }

  onSearch() {
    let req = {
      name: ''
    }
    try {
      this.api.onSearchByCriteria(req).subscribe(data => {
        console.log('data', data)
        for (let i = 0; i < 123; i++) {
          this.rowList[i] = {
            isSelected: false,
            name: `Name ${i + 1}`,
            age: `Age ${i + 1}`
          }
        }
      });
    } catch (error) {
      console.log('error', error)
        for (let i = 0; i < 123; i++) {
          this.rowList[i] = {
            isSelected: false,
            name: `Name ${i + 1}`,
            age: `Age ${i + 1}`
          }
        }
    }

    for (let i = 0; i < 123; i++) {
      this.rowList[i] = {
        isSelected: false,
        name: `Name ${i + 1}`,
        age: `Age ${i + 1}`
      }
    }
    

    // this.api.callFirstApi().pipe(
    //   concatMap(firstResult => {
    //     console.log('First API result:', firstResult);
    //     return this.api.callSecondApi();
    //   }),
    //   concatMap(secondResult => {
    //     console.log('Second API result:', secondResult);
    //     return this.api.callThirdApi();
    //   }),
    //   concatMap(thirdResult => {
    //     console.log('Third API result:', thirdResult);
    //     return this.api.callFourthApi();
    //   })
    // ).subscribe(fourthResult => {
    //   console.log('Fourth API result:', fourthResult);
    // });
  }

}
