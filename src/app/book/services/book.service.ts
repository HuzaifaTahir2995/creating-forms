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
}
