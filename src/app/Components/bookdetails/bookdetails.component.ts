import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
})
export class BookdetailsComponent {
  bookId: any;
  data: any = [];
  book_details: any = {};
  constructor(private route: ActivatedRoute, private books: BookService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
      this.bookDetails();
    });
  }

  bookDetails() {
    this.books.getAllBook().subscribe((response: any) => {
      const data = response.data;
      this.book_details = data.find((book: any) => book._id === this.bookId);
      console.log(this.book_details);
    });
  }

  addToCart(){

  }

  addToWishList() {
    
  }
}
