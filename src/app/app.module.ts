import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './components/app/app.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/bookList/bookList.component';
import { SearchComponent } from './components/search/search.component';
import { ShelfListComponent } from './components/shelfList/shelfList.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';


// Define routes
const appRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'search', component: SearchComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    SearchComponent,
    ShelfListComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
