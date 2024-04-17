import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'profile', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'bookForm', component: BookFormComponent }, 
  { path: 'bookForm/:id', component: BookFormComponent },
  { path: 'blogForm', component: BlogFormComponent }, 
  { path: 'blogForm/:id', component: BlogFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
