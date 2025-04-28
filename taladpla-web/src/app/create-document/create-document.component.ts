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

  tableConfig: any[] = []

  ngOnInit(): void {
    
  }

  onSearch() {
    let req = {
      name: ''
    }
    try {
      this.api.onSearchByCriteria(req).subscribe(data => {
        console.log('data', data)
        this.rowList = data.rows
        // for (let i = 0; i < 123; i++) {
        //   this.rowList[i] = {
        //     isSelected: false,
        //     poId: 'PO' + i.toString().padStart(4, '0'),
        //     name: `Name ${i + 1}`,
        //     age: `Age ${i + 1}`
        //   }
        // }
        this.tableConfig = [
          {
            columnType: "checkBox",
            columnName: '',
            valueKey: "isSelected",
            sortable: false,
            searchable: false,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'Reciept No.',
            valueKey: "poId",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'Item Name',
            valueKey: "equipmentName",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'Vendor Code',
            valueKey: "vendorCode",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'Vendor Name',
            valueKey: "vendorName",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'Price Post VAT',
            valueKey: "pricePostVat",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'Price Pre VAT',
            valueKey: "pricePreVat",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'Issued By',
            valueKey: "poIssueBy",
            sortable: true,
            searchable: true,
            style: "",
          },
          // {
          //   columnType: "input",
          //   valueKey: "isSelected",
          //   style: "",
          // },
        ]
      }, error => {
        console.log('on error subscribe', error.message)
        //toast
      });
    } catch (error) {
      console.log('error', error)
        for (let i = 0; i < 123; i++) {
          this.rowList[i] = {
            isSelected: false,
            poId: 'PO' + i.toString().padStart(4, '0'),
            name: `Name ${i + 1}`,
            age: `Age ${i + 1}`
          }
        }
    }

    for (let i = 0; i < 123; i++) {
      this.rowList[i] = {
        isSelected: false,
        poId: 'PO' + i.toString().padStart(4, '0'),
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
