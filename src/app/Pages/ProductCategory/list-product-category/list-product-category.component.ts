import { Component } from '@angular/core';
import { DeleteProductCategoryComponent } from '../delete-product-category/delete-product-category.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-list-product-category',
  templateUrl: './list-product-category.component.html',
  styleUrls: ['./list-product-category.component.scss']
})
export class ListProductCategoryComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteProductCategoryComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
