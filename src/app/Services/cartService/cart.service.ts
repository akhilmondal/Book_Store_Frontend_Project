import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token');
  }

  addBookToCart(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'bearer ' + this.token,
      }),
    };
    return this.httpservice.postService(
      `carts/${reqdata.book_id}`,
      reqdata,
      true,
      header
    );
  }
}
