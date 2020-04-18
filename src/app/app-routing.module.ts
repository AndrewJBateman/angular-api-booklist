import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookSearchComponent } from "./components/book-search/book-search.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "book-list",
    pathMatch: "full",
  },
  {
    path: "book-list",
    component: BookListComponent,
  },
  {
    path: "book-search",
    component: BookSearchComponent,
  },
  {
    path: "book/:id",
    component: BookDetailComponent,
  },
  {
    path: "**",
    redirectTo: "/404",
    pathMatch: "full",
  },
  {
    path: "404",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
