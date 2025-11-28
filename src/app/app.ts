import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTableComponent } from './table/table';

@Component({
  selector: 'app-root',
  imports: [MyTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data = [
    { name: 'John', age: 30, city: 'London', address: 'Bratislavska 5' },
    { name: 'Sara', age: 25, city: 'Berlin' },
  ];

  columns = [
    { key: 'name', label: 'Name', sortable: true, filterable: true },
    { key: 'age', label: 'Age', sortable: true },
    { key: 'city', label: 'City', filterable: true },
  ];
}
