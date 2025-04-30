import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
export class SearchDocumentComponent implements OnInit {

  constructor() { }
  formValue: any = {
    siteName: '',
    siteCode: '',
    issueDate: '20/04/2025',
    equipmentName: '',
    equipmentCode: '',
    vendorName: '',
    vendorCode: '',
    qty: 0,
    unitCode: '',
    unitName: '',
    issueByName: '',
    issueByCode: '',
    price: 0,
    discount: 0,
    vatInclude: false,
    priceVat: 0,
    totalPrice: 0,
    type: 'N',
    isVat: true,
  }

  ngOnInit(): void {
  }

  dropdownToggle: any = {
    site: false,
    equipment: false,
    vendor: false,
    issueBy: false,
    unit: false,
  }

  comboResult($event: any) {
    console.log('set', $event)
    this.formValue[$event.key + 'Name'] = $event.data.name
    this.formValue[$event.key + 'Code'] = $event.data.value
  }
  ddlList: any = {
    equipment: [
      {
        name: 'Equip Name A',
        value: 'A'
      },
      {
        name: 'Equip Name B',
        value: 'B'
      },
      {
        name: 'Equip Name C',
        value: 'C'
      },
      {
        name: 'Equip Name D',
        value: 'D'
      }
    ],
    vendor: [
      {
        name: 'Vendor Name A',
        value: 'A'
      },
      {
        name: 'Vendor Name B',
        value: 'B'
      },
      {
        name: 'Vendor Name C',
        value: 'C'
      },
      {
        name: 'Vendor Name D',
        value: 'D'
      }
    ],
    site: [
      {
        name: 'Site Name A',
        value: 'A'
      },
      {
        name: 'Site Name B',
        value: 'B'
      },
      {
        name: 'Site Name C',
        value: 'C'
      },
      {
        name: 'Site Name D',
        value: 'D'
      }
    ],
    issueBy: [
      {
        name: 'Mr. Name A',
        value: 'Mr. Name A'
      },
      {
        name: 'Mr. Name B',
        value: 'Mr. Name B'
      },
      {
        name: 'Mr. Name C',
        value: 'Mr. Name C'
      },
      {
        name: 'Mr. Name D',
        value: 'Mr. Name D'
      }
    ],
    unit: [
      {
        name: 'ชิ้น',
        value: 'ชิ้น'
      },
      {
        name: 'กล่อง',
        value: 'กล่อง'
      },
      {
        name: 'อัน',
        value: 'อัน'
      },
      {
        name: 'เส้น',
        value: 'เส้น'
      }
    ]
  }

}
