import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  loading = true;
  errorMessage: string = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Check if 'id' is not null and convert it to a number, otherwise handle the error
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId === null) {
      this.errorMessage = 'Invalid book ID';
      this.router.navigate(['/']); // Redirect to a safe page
      return;
    }

    const bookId = +paramId;
    this.bookService.getBookById(bookId).subscribe(
      (data) => {
        this.book = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'Error fetching book details';
        this.loading = false;
      }
    );
  }
}
