import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/google-api.interface';
import { GoogleBookService } from "src/app/services/google-book.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private googleBookApiService: GoogleBookService) {}

  ngOnInit(): void {
    this.initialBookQuery("google history");
  }

  initialBookQuery(bookTitle: string) {
    this.books = this.googleBookApiService.findBook(bookTitle);
    console.log("initial books", this.books);
  }
}
