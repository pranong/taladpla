import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { DragableTableComponent } from './shared-component/dragable-table/dragable-table.component';
import { TlpTableComponent } from './shared-component/tlp-table/tlp-table.component';
import { TlpPaginatorComponent } from './shared-component/tlp-paginator/tlp-paginator.component';

import { MainComponent } from './main/main.component'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { DragToSelectModule } from 'ngx-drag-to-select';

@NgModule({
  declarations: [AppComponent, CreateDocumentComponent, MainComponent, DragableTableComponent, TlpTableComponent, TlpPaginatorComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule, DragToSelectModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
