import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ListProductComponent } from './Pages/Product/list-product/list-product.component';
import { AppComponent } from './app.component';
import { AddProductComponent } from './Pages/Product/add-product/add-product.component';
import { EditProductComponent } from './Pages/Product/edit-product/edit-product.component';
import { ListBlogComponent } from './Pages/Blog/list-blog/list-blog.component';
import { AddBlogComponent } from './Pages/Blog/add-blog/add-blog.component';
import { EditBlogComponent } from './Pages/Blog/edit-blog/edit-blog.component';
import { IndexAboutComponent } from './Pages/About/index-about/index-about.component';
import { IndexContactComponent } from './Pages/Contact/index-contact/index-contact.component';
import { DetailContactComponent } from './Pages/Contact/detail-contact/detail-contact.component';
import { ListProductCategoryComponent } from './Pages/ProductCategory/list-product-category/list-product-category.component';
import { AddProductCategoryComponent } from './Pages/ProductCategory/add-product-category/add-product-category.component';
import { EditProductCategoryComponent } from './Pages/ProductCategory/edit-product-category/edit-product-category.component';
import { ListBrandComponent } from './Pages/Brand/list-brand/list-brand.component';
import { AddBrandComponent } from './Pages/Brand/add-brand/add-brand.component';
import { EditBrandComponent } from './Pages/Brand/edit-brand/edit-brand.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Product', component: ListProductComponent },
  { path: 'Product/Add', component: AddProductComponent },
  { path: 'Product/Edit', component: EditProductComponent },
  // blog
  { path: 'Blog', component: ListBlogComponent },
  { path: 'Blog/Add', component: AddBlogComponent },
  { path: 'Blog/Edit', component: EditBlogComponent },
  // end blog
  // rand
    { path: 'Brand', component: ListBrandComponent },
    { path: 'Brand/Add', component: AddBrandComponent },
    { path: 'Brand/Edit', component: EditBrandComponent },
  //end brand
  // About
  { path: 'Settings/Index', component: IndexAboutComponent },
  
  //Contact
  
  { path: 'Contacts/Index', component: IndexContactComponent },
  { path: 'Contacts/Detail', component: DetailContactComponent },

  // ProductCategpry
  { path: 'ProductCategpry', component: ListProductCategoryComponent },
  { path: 'ProductCategpry/Add', component: AddProductCategoryComponent },
  { path: 'ProductCategpry/Edit', component: EditProductCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
