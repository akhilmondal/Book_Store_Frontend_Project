import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss'],
})
export class DisplaybooksComponent {
  constructor(private router: Router) {}
  @Input() books: any = [];
  @Input() bookCount: any;

  goToBookDetails(bookId: string) {
    this.router.navigateByUrl('/dashboard/getallbooks/' + bookId);
  }
  sortByLowToHigh() {
    this.books.sort((a: any, b: any) => a.price - b.price);
    console.log(this.books);
  }
  sortByHighToLow() {
    this.books.sort((a: any, b: any) => b.price - a.price);
    console.log(this.books);
  }

  //passing the event or option, and according to that showing books
  onOptionSelected(event: any) {
    const selectedValue = event.target.value;
    if (selectedValue === 'lowtohigh') {
      this.sortByLowToHigh();
    }
    if (selectedValue === 'hightolow') {
      this.sortByHighToLow();
    }
  }
}
