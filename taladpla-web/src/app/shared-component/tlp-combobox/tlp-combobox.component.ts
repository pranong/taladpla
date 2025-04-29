import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'tlp-combobox',
  templateUrl: './tlp-combobox.component.html',
  styleUrls: ['./tlp-combobox.component.css']
})
export class TlpComboboxComponent implements OnInit {
  @ViewChild('comboArea') myDiv!: ElementRef;
  @ViewChild('comboBtnArea') myDiv2!: ElementRef;
  
  @Input() 
  set optionsList(value: any[]) {
    this.options = value
    this.originalOptions = value
  }
  @Input() optionKey: string = '';

  @Output() comboResult = new EventEmitter<any>();
  
  constructor() { }
  toggleStatus: boolean = false;
  textBoxData: string = '';
  options: any[] = [];
  originalOptions: any[] = [];

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.myDiv?.nativeElement.contains(event.target);
    const clickedBtn = this.myDiv2?.nativeElement.contains(event.target);
    console.log('clickedInside', clickedInside)
    console.log('clickedBtn', clickedBtn)
      if (!clickedInside && !clickedBtn) {
        this.toggleStatus = false
        this.textBoxData = ''
      }
    }

  onSelectDropdown(option: any) {
    this.comboResult.emit({key: this.optionKey, value: option.value });
    this.toggleStatus = false
  }

  onClickDropdown() {
    console.log('this.toggleStatus', this.toggleStatus, this.options)
    this.toggleStatus = !this.toggleStatus
    console.log('textBoxData', this.textBoxData)
    this.textBoxData = ''
    console.log('textBoxData2', this.textBoxData)
  }

  onChangeTextBox() {
    console.log('onChangeTextBox', this.textBoxData)
    
    this.options = this.originalOptions.filter(option =>
      option.name.toLowerCase().includes(this.textBoxData.toLowerCase())
    );
  }
}
