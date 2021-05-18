# :zap: Angular API Booklist

* Angular with Angular Material app to search for books from the Google Books API.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-api-booklist?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-api-booklist?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-api-booklist?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-api-booklist?style=plastic)

## :books: General info

* Book search form and search results displayed using mat-cards

## :camera: Screenshots

* ![Example screenshot](./img/books.png)

## :signal_strength: Technologies

* [Angular v12](https://angular.io/) javascript framework
* [Angular Material v12](https://material.angular.io/) component library
* [Angular Material Icons](https://material.io/resources/icons/?style=baseline)
* [@ngrx/store](https://ngrx.io/guide/store) RxJS powered state management

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` to get a server at `http://localhost:4200/`
* If required, run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## :computer: Code Examples

* extract from google-books.service.ts to retrieve book search items from Google Books API

```typescript
export class GoogleBookService {
  private API_URL = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) {}

  findBook(title: string): Observable<Book[]> {
    return this.http
      .get<GoogleBooksApiInterface>(`${this.API_URL}?q=${title}`)
      .pipe(map((data: GoogleBooksApiInterface) => data.items));
  }
}
```

## :cool: Features

* Google book search API does not require a key

## :clipboard: Status & To-Do List

* Status: API book search working - results shown in mat-cards
* To-Do:  Change format to same as for my website flex layout. Change API to show different data

## :clap: Inspiration

* [Google Books APIs: Performing a Search](https://developers.google.com/books/docs/v1/using),

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
