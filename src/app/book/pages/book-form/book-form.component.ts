import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  bookId!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookServiceService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.bookId = +this.route.snapshot.paramMap.get('id')!; 
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      authors: this.fb.array([]), 
      isbn: ['', Validators.required]
    });

    if (this.bookId) {
      const book = this.bookService.getBookById(this.bookId); 
      if (book) {
        this.bookForm.patchValue({
          name: book.name,
          isbn: book.isbn
        });
        book.authors.forEach(author => this.addAuthorControl(author));
      }
    }
  }
  
  addAuthorControl(author: string): void {
    this.authors.push(this.fb.control(author, Validators.required));
  }

  private initForm(): void {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      authors: this.fb.array([]), 
      isbn: ['', Validators.required]
    });
  }

  get authors() {
    return this.bookForm.get('authors') as FormArray;
  }

  get nameControl(): FormControl {
    return this.bookForm.get('name') as FormControl;
  }

  get authorControls(): FormControl[] {
    return (this.bookForm.get('authors') as FormArray).controls as FormControl[];
  }

  addAuthor() {
    const control = this.fb.control('', Validators.required);
    (this.bookForm.get('authors') as FormArray).push(control);
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      if (this.bookId) {
        this.bookService.updateBook(this.bookId, this.bookForm.value);
      } else {
        this.bookService.addBook(this.bookForm.value);
      }
      this.router.navigate(['/book']);
    }
  }
}