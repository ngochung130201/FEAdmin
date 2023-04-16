import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { ProductService } from 'src/app/Services/product.service';
import { TypeProducts } from 'src/app/Types/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})

export class ListProductComponent {
  constructor(public dialog: MatDialog,private productService:ProductService) {}
  ngOnInit(): void {
    var result = this.getProductALL()
   
    
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteProductComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  products: any;
  

  getProductALL(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string,search?:string)  : any{
    this.productService.getAllProduct(currentPageNumber, pageSize).subscribe(products => {
      this.products = products.data;
     // console.log(products.data)
      return  this.products;
    })
  
  }
}