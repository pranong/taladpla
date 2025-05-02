import { Component, OnInit, Renderer2 } from '@angular/core';
import { SearchDocService } from './service/search-doc/search-doc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = '';
  messageDb = '';

  constructor(
    private api: SearchDocService,
    private renderer: Renderer2
  ) { }

  isDarkMode = false;

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    this.updateThemeClass();

    this.api.getVersion().subscribe(data => {
      this.message = data.message;
    });

    this.api.getDB().subscribe(data => {
      console.log('data.result', data)
      this.messageDb = data.status ? 'READY!' : 'FAILED!'
    });
  }

  isExpanded = true;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateThemeClass();
  }

  private updateThemeClass() {
    const root = document.documentElement;
    if (this.isDarkMode) {
      this.renderer.addClass(root, 'dark');
    } else {
      this.renderer.removeClass(root, 'dark');
    }
  }
}
