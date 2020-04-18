import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavModule } from './components/nav/nav.module';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    NavModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
