// book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookListService } from '../../services/book-list.service';
// import { NgToastService } from 'ng-angular-popup'; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-list', // Component selector
  templateUrl: './book-list.component.html', // Reference to the HTML template
  styleUrls: ['./book-list.component.scss'], // Reference to the CSS styles
})
export class BookListComponent implements OnInit {
  books: any[] = []; // List of books
  filteredBooks: any[] = []; // Filtered list of books
  searchQuery = ''; // Search query
  loading = true; // Loading indicator

  constructor(
    private bookService: BookService,
    private bookListService: BookListService ,
    // private toast : NgToastService// Inject the book list service
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (data) => {
        this.books = data; // Set list of books
        this.filteredBooks = data; // Set filtered list of books
        this.loading = false; // Loading completed
      },
      (error) => {
        console.error(error); // Handle errors
        this.loading = false;
      }
    );
  }

  addToShelf(shelf: string, book: any) {
    this.bookListService.addBookToList(shelf, book); 
    // this.toast.success({
    //   detail: "Book Added Successfully",
    //   summary : "",
    //   duration: 3000
    // })

    this.snackBar.open('Book Added Successfully!', 'Close', {
      duration: 5000, // Popup stays for 5 seconds
      verticalPosition: 'top', // Can be 'top' or 'bottom'
      horizontalPosition: 'center', // Can be 'start', 'center', 'end', 'left', or 'right'
    });
  }

  onSearch() {
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
