import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', rating: 4.5, description: 'A classic novel.', coverImage: 'https://images-eu.ssl-images-amazon.com/images/I/61xoCr0+U6L._AC_UL600_SR600,400_.jpg' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', rating: 4.8, description: 'Another classic.', coverImage: 'https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL600_SR600,400_.jpg' },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 4.6, description: 'A dystopian novel.', coverImage: 'https://images-eu.ssl-images-amazon.com/images/I/81qcL5puCYL._AC_UL600_SR600,400_.jpg' },
    { id: 4, title: 'Do It Today', author: 'George Orwell', genre: 'Dystopian', rating: 4.6, description: 'A dystopian novel.', coverImage: 'https://m.media-amazon.com/images/I/61jCkOVf1oL._AC_SR146,118_QL68_.jpg'},
    { id: 5, title: 'Just For Today', author: 'George Orwell', genre: 'Dystopian', rating: 4.6, description: 'A dystopian novel.', coverImage: 'https://m.media-amazon.com/images/I/61FwYqa7mxL._AC_UY218_.jpg'},
    { id: 6, title: 'Ideas to Grow mind', author: 'George Orwell', genre: 'Dystopian', rating: 4.6, description: 'A dystopian novel.', coverImage: 'https://m.media-amazon.com/images/I/51gg+wGL1SL._AC_UY218_.jpg' },
    { id: 7, title: 'Ashoka', author: 'George Orwell', genre: 'Dystopian', rating: 4.6, description: 'A dystopian novel.', coverImage: 'https://m.media-amazon.com/images/I/51OEnlv1DwL._AC_UF226,226_FMjpg_.jpg' },
    { id: 8, title: 'OIR Test', author: 'George Orwell', genre: 'Dystopian', rating: 4.6, description: 'A dystopian novel.', coverImage: 'https://m.media-amazon.com/images/I/517HlkfibaL._AC_UF226,226_FMjpg_.jpg' },
    { id: 9, title: 'Ruskin Bond', author: 'George Orwell', genre: 'Dystopian', rating: 4.6, description: 'A dystopian novel.', coverImage: 'https://m.media-amazon.com/images/I/51UtH2UMb+S._AC_UF226,226_FMjpg_.jpg' },
    
    // Add more books here
  ];

  getBooks(): Observable<any[]> {
    return of(this.books);
  }

  getBookById(bookId: number): Observable<any> {
    const book = this.books.find(b => b.id === bookId);
    return of(book);
  }
}
