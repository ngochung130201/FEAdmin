import { Component } from '@angular/core';
import { ListProductCategoryComponent } from '../list-product-category/list-product-category.component';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-product-category',
  templateUrl: './delete-product-category.component.html',
  styleUrls: ['./delete-product-category.component.scss']
})
export class DeleteProductCategoryComponent {
  constructor(public dialogRef: MatDialogRef<ListProductCategoryComponent>) {}
}
