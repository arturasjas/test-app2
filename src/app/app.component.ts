import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Item = {
  value: string;
  date: string;
};

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputValue: string = '';
  items: Item[] = [];

  itemDone = false;

  addItem() {
    const date = new Date();
    this.items.push({
      value: this.inputValue,
      date: date.toDateString(),
    });

    this.inputValue = '';
  }

  markAsDone() {
    this.itemDone = true;
  }
}
