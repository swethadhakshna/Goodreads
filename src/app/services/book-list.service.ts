import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  // Define a dictionary with string keys and array values
  private bookLists: Record<string, any[]> = {
    'read': [],
    'currentlyReading': [],
    'toRead': []
  };

  addBookToList(listName: string, book: any): void {
    if (listName in this.bookLists) {
      this.bookLists[listName].push(book);
    }
  }

  removeBookFromList(listName: string, bookId: number): void {
    if (listName in this.bookLists) {
      this.bookLists[listName] = this.bookLists[listName].filter((b: any) => b.id !== bookId);
    }
  }

  getBookLists(): Observable<Record<string, any[]>> {
    return of(this.bookLists);
  }
}
