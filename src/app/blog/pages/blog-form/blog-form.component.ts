import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogForm!: FormGroup;
  blogId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.blogId = +this.route.snapshot.paramMap.get('id')!; 
    this.initForm();
    
    if (this.blogId) {
      const blog = this.blogService.getBlogById(this.blogId); 
      if (blog) {
        this.blogForm.patchValue({
          title: blog.title,
          description: blog.description,
          author: blog.author
        });
        blog.comments.forEach(comment => this.addCommentControl(comment));
      }
    }
  }
  
  private initForm(): void {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      comments: this.fb.array([])
    });
  }

  get nameControl(): FormControl {
    return this.blogForm.get('title') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.blogForm.get('description') as FormControl;
  }

  get authorControl(): FormControl {
    return this.blogForm.get('author') as FormControl;
  }

  get comments(): FormArray {
    return this.blogForm.get('comments') as FormArray;
  }

  addCommentControl(comment: string): void {
    this.comments.push(this.fb.control(comment, Validators.required));
  }

  addComment(): void {
    this.comments.push(this.fb.control('', Validators.required));
  }

  onSubmit(): void {
    if (this.blogForm.valid) {
      if (this.blogId) {
        this.blogService.updateBlog(this.blogId, this.blogForm.value);
      } else {
        this.blogService.addBlog(this.blogForm.value);
      }
      this.router.navigate(['/blog']);
    }
  }
}