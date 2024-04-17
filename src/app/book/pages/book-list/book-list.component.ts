import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit{
  books:Book[] | undefined;
  
  constructor(private bookService: BookServiceService, private router:Router){}
  
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  edit(id: number): void {
    this.router.navigate(['/bookForm', id]);
  }
  delete(id: number) {
    console.log('Delete book with ID:', id);
  }
  addBook() {
    this.router.navigate(['/bookForm']);
  }
  
  deleteAllBooks() {
    console.log('Deleting all books...');
  }

}
