import { Component } from '@angular/core';
import { BOOKS } from './json.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  books = BOOKS;
}
