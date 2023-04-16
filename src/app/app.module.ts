import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { ModalComponent } from './Layouts/modal/modal.component';
import { HomeComponent } from './Pages/home/home.component';
import { ListProductComponent } from './Pages/Product/list-product/list-product.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { AddProductComponent } from './Pages/Product/add-product/add-product.component';
import { EditProductComponent } from './Pages/Product/edit-product/edit-product.component';
import { ListBlogComponent } from './Pages/Blog/list-blog/list-blog.component';
import { AddBlogComponent } from './Pages/Blog/add-blog/add-blog.component';
import { EditBlogComponent } from './Pages/Blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './Pages/Blog/delete-blog/delete-blog.component';
import { DeleteProductComponent } from './Pages/Product/delete-product/delete-product.component';
import { ListBrandComponent } from './Pages/Brand/list-brand/list-brand.component';
import { AddBrandComponent } from './Pages/Brand/add-brand/add-brand.component';
import { EditBrandComponent } from './Pages/Brand/edit-brand/edit-brand.component';
import { DeleteBrandComponent } from './Pages/Brand/delete-brand/delete-brand.component';
import { DeleteAboutComponent } from './Pages/About/delete-about/delete-about.component';
import { AddAboutComponent } from './Pages/About/add-about/add-about.component';
import { EditAboutComponent } from './Pages/About/edit-about/edit-about.component';
import { IndexAboutComponent } from './Pages/About/index-about/index-about.component';
import { IndexContactComponent } from './Pages/Contact/index-contact/index-contact.component';
import { AddContactComponent } from './Pages/Contact/add-contact/add-contact.component';
import { EditContactComponent } from './Pages/Contact/edit-contact/edit-contact.component';
import { DeleteContactComponent } from './Pages/Contact/delete-contact/delete-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { IndexProductCategoryComponent } from './Pages/ProductCategory/index-product-category/index-product-category.component';
import { ListProductCategoryComponent } from './Pages/ProductCategory/list-product-category/list-product-category.component';
import { AddProductCategoryComponent } from './Pages/ProductCategory/add-product-category/add-product-category.component';
import { EditProductCategoryComponent } from './Pages/ProductCategory/edit-product-category/edit-product-category.component';
import { DeleteProductCategoryComponent } from './Pages/ProductCategory/delete-product-category/delete-product-category.component';
import { DetailContactComponent } from './Pages/Contact/detail-contact/detail-contact.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent,
    HomeComponent,
    ListProductComponent,
    LoginComponent,
    AddProductComponent,
    EditProductComponent,
    ListBlogComponent,
    AddBlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    DeleteProductComponent,
    ListBrandComponent,
    AddBrandComponent,
    EditBrandComponent,
    DeleteBrandComponent,
    DeleteAboutComponent,
    AddAboutComponent,
    EditAboutComponent,
    IndexAboutComponent,
    IndexContactComponent,
    AddContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    IndexProductCategoryComponent,
    ListProductCategoryComponent,
    AddProductCategoryComponent,
    EditProductCategoryComponent,
    DeleteProductCategoryComponent,
    DetailContactComponent,

  ],
  imports: [
    MatDialogModule, 
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
