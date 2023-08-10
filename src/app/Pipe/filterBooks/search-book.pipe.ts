import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBook',
})
export class SearchBookPipe implements PipeTransform {
  transform(books: any[], searchNote: string): any[] {
    if (!books || !searchNote) {
      return books;
    }

    const searchTerm = searchNote.toLowerCase().trim();
    return books.filter((book) => {
      //It rerurns those books which includes or have the searched alphabates.
      return (
        book.bookName.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
      );
    });
  }
}
