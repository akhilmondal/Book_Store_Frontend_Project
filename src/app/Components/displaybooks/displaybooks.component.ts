import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss'],
})
export class DisplaybooksComponent {
  constructor(private router: Router, private data: DataService) {}
  @Input() books: any = [];
  @Input() bookCount: any;
  searchMessage!: string;
  messageData!: string;
  subscription!: Subscription;
  ngOnInit() {
    this.subscription = this.data.currentSearchInput.subscribe(
      (message) => (this.searchMessage = message)
    );

    // Search Data coming from dashboard to display using data service
    this.data.currentSearchInput.subscribe((result: any) => {
      this.searchMessage = result;
      console.log(this.searchMessage);
    });
  }

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
