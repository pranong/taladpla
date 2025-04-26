import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragableTableComponent } from './dragable-table.component';

describe('DragableTableComponent', () => {
  let component: DragableTableComponent;
  let fixture: ComponentFixture<DragableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragableTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
