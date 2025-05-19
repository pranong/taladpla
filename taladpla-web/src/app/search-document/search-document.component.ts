import { Component, OnInit } from '@angular/core';
import { SearchDocService } from '../service/search-doc/search-doc.service';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
export class SearchDocumentComponent implements OnInit {

  constructor(private api: SearchDocService) { }
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
    type: 'N',
    isVat: false,
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
  dropdownToggle: any = {
    site: false,
    equipment: false,
    vendor: false,
    issueBy: false,
    unit: false,
  };
  tableConfig: any[] = [
          {
            columnType: "checkBox",
            columnName: '',
            valueKey: "isSelected",
            sortable: false,
            searchable: false,
            style: "sticky left-[0px] z-20",
          },
          {
            columnType: "text",
            columnName: 'วันที่',
            valueKey: "issueDate",
            sortable: true,
            searchable: true,
            style: "sticky left-[40px] z-20",
          },
          {
            columnType: "text",
            columnName: 'Item Name',
            valueKey: "equipmentName",
            sortable: true,
            searchable: true,
            style: "sticky left-[120px] z-20",
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
            columnName: 'ผู้เบิก',
            valueKey: "issueBy",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'จำนวน',
            valueKey: "qty",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'หน่วย',
            valueKey: "unit",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'ราคา',
            valueKey: "price",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'ก่อน VAT',
            valueKey: "preVAT",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'VAT 7%',
            valueKey: "postVAT",
            sortable: true,
            searchable: true,
            style: "",
          },
          {
            columnType: "text",
            columnName: 'จำนวนเงิน',
            valueKey: "totalPrice",
            sortable: true,
            searchable: true,
            style: "",
          },
        ]
  rowList: any[] = []

  ngOnInit(): void {
    try {
      this.api.getMasterData('all').subscribe(res => {
        console.log('res', res)
        this.ddlList = res.data
      }, error => {
        console.log('on error subscribe', error.message)
        //toast
      });
    } catch (error) {
      console.log('error', error)
    }
  }

  comboResult($event: any) {
    console.log('set', $event)
    this.formValue[$event.key + 'Name'] = $event.data.name
    this.formValue[$event.key + 'Code'] = $event.data.value
  }
  
  doSubmit() {
    // TODO: Validate
    console.log('dataAll', this.formValue)
    let priceIncludeQty = this.formValue.price * this.formValue.qty
    let preVAT = priceIncludeQty - this.formValue.discount
    let postVAT = this.formValue.isVat ? (preVAT * 7) / 100 : 0
    let totalPrice = preVAT + postVAT
    let issueBy = this.formValue.issueByName
    let unit = this.formValue.unitName
    if (this.formValue.type == 'O') {
      preVAT = 0
      postVAT = 0
      totalPrice = 0
    }
    let saveData = { isSelected: false, ...this.formValue, issueBy, unit, preVAT, postVAT, totalPrice}
    this.rowList = [...this.rowList, saveData]
  }

}
