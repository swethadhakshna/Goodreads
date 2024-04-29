import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookShelvesComponent } from './components/book-shelves/book-shelves.component';

const routes: Routes = [
  { path: '', component: BookListComponent }, // Default route to the book list
  { path: 'books', component: BookListComponent }, // Route to the book list
  { path: 'books/:id', component: BookDetailsComponent }, // Route to book details
  { path: 'shelves', component: BookShelvesComponent }, // Route to book shelves
  { path: 'register', component: RegisterComponent }, // Route to registration page
  { path: 'login', component: LoginComponent }, // Route to login page
  { path: '**', redirectTo: '/' }  // Fallback route for invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
