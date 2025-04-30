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
      if (!clickedInside && !clickedBtn) {
        this.toggleStatus = false
        // this.textBoxData = ''
      }
    }

  onSelectDropdown(option: any) {
    this.comboResult.emit({ key: this.optionKey, data: option });
    this.textBoxData = option.name
    this.options = this.originalOptions.filter(option =>
      option.name.toLowerCase().includes(this.textBoxData.toLowerCase())
    );
    setTimeout(() => {
      this.toggleStatus = false
    }, 100);
  }

  onClickDropdown(type: string) {
    if (type == 'focus') {
      this.toggleStatus = true
    } else if (type == 'blur') {
      if (this.textBoxData !== '') {
        let findValue = this.originalOptions.find(x => x.name == this.textBoxData.trim())
        let option = {
          name: this.textBoxData,
          value: findValue ? findValue.value : ''
        }
        this.comboResult.emit({ key: this.optionKey, data: option });
      }
      setTimeout(() => {
        this.toggleStatus = false
      }, 100);
    }
  }

  onChangeTextBox() {
    this.options = this.originalOptions.filter(option =>
      option.name.toLowerCase().includes(this.textBoxData.toLowerCase())
    );
    if (this.options.length == 0) {
      this.toggleStatus = false
    } else if (this.options.length == 0 && !this.toggleStatus) {
      this.toggleStatus = true
    }
  }
}
