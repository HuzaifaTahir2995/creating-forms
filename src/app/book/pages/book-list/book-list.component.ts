import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookServiceService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit{
  books:Book[] | undefined;
  
  constructor(private bookService: BookServiceService){}
  
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  edit(id: number) {
    console.log('Edit book with ID:', id);
  }

  delete(id: number) {
    console.log('Delete book with ID:', id);
  }

}
