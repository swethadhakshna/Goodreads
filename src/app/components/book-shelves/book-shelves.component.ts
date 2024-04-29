import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../services/book-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-shelves', // Component selector
  templateUrl: './book-shelves.component.html', // HTML template
  styleUrls: ['./book-shelves.component.scss'], // CSS styles
})
export class BookShelvesComponent implements OnInit {
  bookLists: any = {}; // Store different book shelves
  loading = true; // Indicate loading status

  constructor(private bookListService: BookListService,  private snackBar: MatSnackBar) {} // Dependency injection of the book list service

  ngOnInit() {
    this.bookListService.getBookLists().subscribe(
      (data) => {
        this.bookLists = data; // Set book shelves
        this.loading = false; // Update loading status
      },
      (error) => {
        console.error(error); // Handle errors
        this.loading = false;
      }
    );
  }


  removeBookFromList(listName: string, bookId: number): void {
    this.bookListService.removeBookFromList(listName, bookId); 
    this.snackBar.open('Book Removed Successfully!', 'Close', {
      duration: 5000, // Popup stays for 5 seconds
      verticalPosition: 'top', // Can be 'top' or 'bottom'
      horizontalPosition: 'center', // Can be 'start', 'center', 'end', 'left', or 'right'
    });// Remove book from specified list
  }
}
