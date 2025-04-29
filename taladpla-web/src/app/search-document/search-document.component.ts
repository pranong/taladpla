import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
export class SearchDocumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropdownToggle: any = {
    company: false,
  }

  comboResult($event: any) {
    console.log('set', $event)
  }
  ddlList: any = {
    company: [
      {
        name: 'Name A',
        value: 'A'
      },
      {
        name: 'Name B',
        value: 'B'
      },
      {
        name: 'Name C',
        value: 'C'
      },
      {
        name: 'Name D',
        value: 'D'
      }
    ]
  }

}
