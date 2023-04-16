import { Component } from '@angular/core';
import { ListBlogComponent } from '../list-blog/list-blog.component';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.scss']
})
export class DeleteBlogComponent {
  constructor(public dialogRef: MatDialogRef<ListBlogComponent>) {}
}
