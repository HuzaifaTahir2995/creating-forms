import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
   books :Book[] = [
    { id: 1, name: 'Book 1', authors: ['Author 1'], isbn: 'ISBN 1' },
    { id: 2, name: 'Book 2', authors: ['Author 2'], isbn: 'ISBN 2' },
    { id: 3, name: 'Book 3', authors: ['Author 3'], isbn: 'ISBN 3' }
  ];
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  updateBook(id: number, updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books[index] = { ...updatedBook, id }; 
    }
  }

  addBook(newBook: Omit<Book, 'id'>): void {
    const maxId = Math.max(...this.books.map(book => book.id));
    const id = maxId >= 0 ? maxId + 1 : 1; // Generate a new ID
    const bookWithId: Book = { ...newBook, id };
    this.books.push(bookWithId);
  }
}
