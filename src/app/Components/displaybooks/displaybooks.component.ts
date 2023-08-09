import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})
export class DisplaybooksComponent {
  @Input() books: any = [];
  @Input() bookCount: any;


}
