import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../../services/google-book.service';
import { Book } from '../../models/google-api.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private googleBookApiService: GoogleBookService) { }

  ngOnInit(): void {
  }

  bookQuery(bookTitle: string) {
    if (bookTitle.length > 4) {
      this.books = this.googleBookApiService.findBook(bookTitle);
      console.log('books', this.books);
    }

  }

}
