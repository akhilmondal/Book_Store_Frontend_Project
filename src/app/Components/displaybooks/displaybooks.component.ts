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
}
