import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs : Blog[] | undefined;

  constructor( private blogService: BlogService){};

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  edit(id: number) {
    console.log('Edit blog with ID:', id);
  }

  delete(id: number) {
    console.log('Delete blog with ID:', id);
  }
}
