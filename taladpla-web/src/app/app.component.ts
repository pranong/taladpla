import { Component, OnInit } from '@angular/core';
import { SearchDocService } from './service/search-doc/search-doc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = '';
  messageDb = '';

  constructor(private api: SearchDocService) { }

  ngOnInit() {
    this.api.getMessage().subscribe(data => {
      this.message = data.message;
    });

    this.api.getDB().subscribe(data => {
      console.log('data.result', data)
      this.messageDb = data.message
    });
  }
}
