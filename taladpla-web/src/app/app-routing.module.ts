import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { SearchDocumentComponent } from './search-document/search-document.component';
import { MainComponent } from './main/main.component'; // only if you have it

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search-document', component: SearchDocumentComponent },
  { path: 'create-document', component: CreateDocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
