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


  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.getCart().subscribe((response: any) => {
      this.books = response.data.books;
      console.log(this.books);
      this.itemNumber = this.books.length;
    });
  }
}
