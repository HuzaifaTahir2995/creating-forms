import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {
  constructor(private router: Router) { }
  @Output() add = new EventEmitter<void>();
  @Output() deleteAll = new EventEmitter<void>();
  addBook(): void {
    this.router.navigate(['/book/form']);
  }
}
