import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { MainComponent } from './main/main.component'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
;

@NgModule({
  declarations: [AppComponent, CreateDocumentComponent, MainComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
