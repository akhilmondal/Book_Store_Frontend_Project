import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  getAllBook() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'bearer ' + this.token,
      }),
    };
    return this.httpService.getService('/books', true, header);
  }
}
  