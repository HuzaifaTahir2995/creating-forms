import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import { SharedModule } from '../shared/shared.module';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
