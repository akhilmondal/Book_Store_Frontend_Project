import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dataService: DataService) {}

  onSearchInputChange(event: any) {
    //console.log(event.target.value);

    this.dataService.updateSearchInput(event.target.value);
  }
}
