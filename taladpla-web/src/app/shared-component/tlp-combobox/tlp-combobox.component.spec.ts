import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlpComboboxComponent } from './tlp-combobox.component';

describe('TlpComboboxComponent', () => {
  let component: TlpComboboxComponent;
  let fixture: ComponentFixture<TlpComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlpComboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlpComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
