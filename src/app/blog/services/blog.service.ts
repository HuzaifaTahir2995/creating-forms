import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
   blogs: Blog[] = [
    { id: 1, title: 'Blog 1', description: 'Description 1', author: 'Author 1', comments: ['Comment 1'] },
    { id: 2, title: 'Blog 2', description: 'Description 2', author: 'Author 2', comments: ['Comment 2'] },
    { id: 3, title: 'Blog 3', description: 'Description 3', author: 'Author 3', comments: ['Comment 3'] }
  ];
  constructor() { }
  getBlogs(): Blog[] {
    return this.blogs;
  }
  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(blog => blog.id === id);
  }
  updateBlog(id: number, updatedBlog: Blog): void {
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs[index] = { ...updatedBlog, id: this.blogs[index].id };
    }
  }
  addBlog(newBlog: Omit<Blog, 'id'>): void {
    const maxId = Math.max(...this.blogs.map(blog => blog.id));
    const id = maxId >= 0 ? maxId + 1 : 1; 
    const blogWithId: Blog = { ...newBlog, id };
    this.blogs.push(blogWithId);
  }
}

