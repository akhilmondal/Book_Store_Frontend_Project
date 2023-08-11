import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbooksComponent } from './getallbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplaybooksComponent } from '../displaybooks/displaybooks.component';
import { SearchBookPipe } from 'src/app/Pipe/filterBooks/search-book.pipe';

describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GetallbooksComponent, DisplaybooksComponent, SearchBookPipe],
    });
    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
