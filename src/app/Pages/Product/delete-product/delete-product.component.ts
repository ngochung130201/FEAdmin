import { Component } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {
  constructor(public dialogRef: MatDialogRef<ListProductComponent>) {}
}
