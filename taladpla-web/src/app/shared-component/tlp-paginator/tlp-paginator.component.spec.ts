import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlpPaginatorComponent } from './tlp-paginator.component';

describe('TlpPaginatorComponent', () => {
  let component: TlpPaginatorComponent;
  let fixture: ComponentFixture<TlpPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlpPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlpPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
