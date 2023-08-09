import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss'],
})
export class GetallbooksComponent {
  data: any = [];
  dataCount: any;

  constructor(private books: BookService) {}

  ngOnInit() {
    this.onSubmit();
  }
  onSubmit() {
    this.books.getAllBook().subscribe((response: any) => {
      console.log(response);
      this.data = response.data;
      this.dataCount = this.data.length;
    });
  }

}
