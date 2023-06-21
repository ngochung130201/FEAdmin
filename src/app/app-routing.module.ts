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
import { IndexMenuComponent } from './Pages/Menu/index-menu/index-menu.component';
import { AddMenuComponent } from './Pages/Menu/add-menu/add-menu.component';
import { EditMenuComponent } from './Pages/Menu/edit-menu/edit-menu.component';
import { IndexSuppliersComponent } from './Pages/Supplier/index-suppliers/index-suppliers.component';
import { AddSuppliersComponent } from './Pages/Supplier/add-suppliers/add-suppliers.component';
import { EditSuppliersComponent } from './Pages/Supplier/edit-suppliers/edit-suppliers.component';
import { IndexSliderComponent } from './Pages/Slider/index-slider/index-slider.component';
import { AddSliderComponent } from './Pages/Slider/add-slider/add-slider.component';
import { EditSliderComponent } from './Pages/Slider/edit-slider/edit-slider.component';
import { IndexBlogCategoryComponent } from './Pages/BlogCategory/index-blog-category/index-blog-category.component';
import { AddBlogCategoryComponent } from './Pages/BlogCategory/add-blog-category/add-blog-category.component';
import { EditBlogCategoryComponent } from './Pages/BlogCategory/edit-blog-category/edit-blog-category.component';
import { ProductCommentComponent } from './Pages/ProductComment/product-comment/product-comment.component';
import { DetailProductCommentComponent } from './Pages/ProductComment/detail-product-comment/detail-product-comment.component';
import { OrderComponent } from './Pages/Order/order/order.component';
import { ChartComponent } from './Pages/Order/chart/chart.component';
import { OrderDetailComponent } from './Order/order-detail/order-detail.component';
import { OrderEditComponent } from './Order/order-edit/order-edit.component';
import { UserComponent } from './Pages/user/user.component';
import { LoginComponent } from './Pages/Auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Product', component: ListProductComponent },
  { path: 'Product/Add', component: AddProductComponent },
  { path: 'Product/Edit/:slug', component: EditProductComponent },
  // blog
  { path: 'Blog', component: ListBlogComponent },
  { path: 'Blog/Add', component: AddBlogComponent },
  { path: 'Blog/Edit/:slug', component: EditBlogComponent },
  // end blog
  // rand
    { path: 'Brand', component: ListBrandComponent },
    { path: 'Brand/Add', component: AddBrandComponent },
    { path: 'Brand/Edit/:id', component: EditBrandComponent },
  //end brand
  // About
  { path: 'Settings/Index', component: IndexAboutComponent },
  
  //Contact
  
  { path: 'Contacts/Index', component: IndexContactComponent },
  { path: 'Contacts/Detail/:contactId', component: DetailContactComponent },

  // ProductCategpry
  { path: 'ProductCategpry', component: ListProductCategoryComponent },
  { path: 'ProductCategory/Add', component: AddProductCategoryComponent },
  { path: 'ProductCategpry/Edit/:slug', component: EditProductCategoryComponent },
  // post category

   { path: 'BlogCategory', component: IndexBlogCategoryComponent },
   { path: 'BlogCategory/Add', component: AddBlogCategoryComponent },
   { path: 'BlogCategory/Edit/:slug', component: EditBlogCategoryComponent },
 // Menu
 { path: 'Menu', component: IndexMenuComponent },
 { path: 'Menu/Add', component: AddMenuComponent },
 { path: 'Menu/Edit/:id', component: EditMenuComponent },
 // Suppliers
 { path: 'Supplier', component: IndexSuppliersComponent },
 { path: 'Supplier/Add', component: AddSuppliersComponent },
 { path: 'Supplier/Edit/:id', component: EditSuppliersComponent },
  
 //slider 
 // Suppliers
 { path: 'Slider', component: IndexSliderComponent },
 { path: 'Slider/Add', component: AddSliderComponent },
 { path: 'Slider/Edit/:id', component: EditSliderComponent },
//  end slider
//ProductComment
{ path: 'ProductComment', component:ProductCommentComponent },
{ path: 'ProductComment/Detail/:commentID', component: DetailProductCommentComponent },
// Order 
{ path: 'Order', component:OrderComponent },
{ path: 'Order/Edit/:id', component:OrderEditComponent },
{ path: 'Detail/:id', component:OrderDetailComponent },
{ path: 'Chart', component: ChartComponent },
{ path: 'User/Index', component: UserComponent },
{ path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
