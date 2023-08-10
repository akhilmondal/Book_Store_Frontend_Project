import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  books: any = [];
  itemNumber!: number;
  panelOpenState = false;
  panelOpenState2 = false;

  constructor(private carts: CartService) {}

  ngOnInit() {
    this.carts.getCart().subscribe((response: any) => {
      this.books = response.data.books;
      console.log(this.books);
      this.itemNumber = this.books.length;
    });
  }

  addToCart(bookId: any) {
    let payload = {
      book_id: bookId,
    };
    this.carts.addBookToCart(payload).subscribe((response: any) => {
      console.log(response);
    });
  }
  removeFromCart(bookId: any) {
    let payload = {
      book_id: bookId,
    };
    // this.carts.(payload).subscribe((response: any) => {
    //   console.log(response);
    // });

  }
}
