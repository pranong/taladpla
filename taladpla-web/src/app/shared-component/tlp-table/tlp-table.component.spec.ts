import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlpTableComponent } from './tlp-table.component';

describe('TlpTableComponent', () => {
  let component: TlpTableComponent;
  let fixture: ComponentFixture<TlpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlpTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
