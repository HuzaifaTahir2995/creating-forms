import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs : Blog[] | undefined;

  constructor( private blogService: BlogService, private router:Router){};

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  edit(id: number): void {
    this.router.navigate(['/blogForm', id]);
  }

  delete(id: number) {
    console.log('Delete blog with ID:', id);
  }
  addBlog() {
    this.router.navigate(['/blogForm']);
  }
  
  deleteAllBlogs() {
    console.log('Deleting all books...');
  }
}
