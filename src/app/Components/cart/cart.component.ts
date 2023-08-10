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
  cartId: any;

  constructor(private carts: CartService) {}

  ngOnInit() {
    this.carts.getCart().subscribe((response: any) => {
      this.cartId = response.data._id;
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
    this.ngOnInit();
  }

  //remove from cart
  removeFromCart(bookId: any) {
    let payload = {
      book_id: bookId,
    };
    this.carts.removeBookFromCart(payload).subscribe((response: any) => {
      console.log(response);
    });
    this.ngOnInit();
  }

  isPurchase() {
    let payload = {
      cart_id: this.cartId,
    };
    this.carts.isPurchase(payload).subscribe((response: any) => {
      console.log(response);
    });
  }
}
