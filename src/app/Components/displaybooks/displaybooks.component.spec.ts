import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybooksComponent } from './displaybooks.component';
import { SearchBookPipe } from 'src/app/Pipe/filterBooks/search-book.pipe';

describe('DisplaybooksComponent', () => {
  let component: DisplaybooksComponent;
  let fixture: ComponentFixture<DisplaybooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],

      declarations: [DisplaybooksComponent, SearchBookPipe],
    });
    fixture = TestBed.createComponent(DisplaybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
