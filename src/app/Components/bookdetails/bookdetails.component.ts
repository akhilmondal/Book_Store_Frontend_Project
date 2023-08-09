import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { CartService } from 'src/app/Services/cartService/cart.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
})
export class BookdetailsComponent {
  bookId: any;
  data: any = [];
  book_details: any = {};
  constructor(
    private route: ActivatedRoute,
    private books: BookService,
    private carts: CartService
  ) {}

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
    });
  }

  //method to hit api for add book to cart
  addToCart() {
    let payload = {
      book_id: this.book_details._id,
    };
    this.carts.addBookToCart(payload).subscribe((response: any) => {
      console.log(response);
    });
  }

  //method to hit api for add book to wishlist
  addToWishList() {
    let payload = {
      book_id: this.book_details._id,
    };
    this.carts.addBookToWishList(payload).subscribe((response: any) => {
      console.log(response);
    });
  }
}
