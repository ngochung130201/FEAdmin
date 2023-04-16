import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBrandComponent } from '../delete-brand/delete-brand.component';
import { TyBrand } from 'src/app/Types/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent {
  ngOnInit(): void {
    this.handleGetBrand();

  }
  constructor(public dialog: MatDialog,private BrandService: BrandService) {}
  getBrands: Array<TyBrand> = [];
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteBrandComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  } 
  handleGetBrand() {
    this.BrandService.getAllBrand().subscribe({
      next: (item => {
        this.getBrands = item;
        return this.getBrands;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }
}
