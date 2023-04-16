import { Component } from '@angular/core';
import { ListBrandComponent } from '../list-brand/list-brand.component';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.scss']
})
export class DeleteBrandComponent {
  constructor(public dialogRef: MatDialogRef<ListBrandComponent>) {}
}
