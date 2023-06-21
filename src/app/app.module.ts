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
import { IndexMenuComponent } from './Pages/Menu/index-menu/index-menu.component';
import { AddMenuComponent } from './Pages/Menu/add-menu/add-menu.component';
import { EditMenuComponent } from './Pages/Menu/edit-menu/edit-menu.component';
import { DeleteMenuComponent } from './Pages/Menu/delete-menu/delete-menu.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSuppliersComponent } from './Pages/Supplier/edit-suppliers/edit-suppliers.component';
import { DeleteSuppliersComponent } from './Pages/Supplier/delete-suppliers/delete-suppliers.component';
import { AddSuppliersComponent } from './Pages/Supplier/add-suppliers/add-suppliers.component';
import { IndexSuppliersComponent } from './Pages/Supplier/index-suppliers/index-suppliers.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IndexSliderComponent } from './Pages/Slider/index-slider/index-slider.component';
import { AddSliderComponent } from './Pages/Slider/add-slider/add-slider.component';
import { EditSliderComponent } from './Pages/Slider/edit-slider/edit-slider.component';
import { NgToastModule } from 'ng-angular-popup';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EditorModule } from 'primeng/editor';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { CKEditorModule } from 'ng2-ckeditor';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { IndexBlogCategoryComponent } from './Pages/BlogCategory/index-blog-category/index-blog-category.component';
import { AddBlogCategoryComponent } from './Pages/BlogCategory/add-blog-category/add-blog-category.component';
import { EditBlogCategoryComponent } from './Pages/BlogCategory/edit-blog-category/edit-blog-category.component';
import { ProductCommentComponent } from './Pages/ProductComment/product-comment/product-comment.component';
import { DetailProductCommentComponent } from './Pages/ProductComment/detail-product-comment/detail-product-comment.component';
import { DetailPostCommentComponent } from './Pages/PostComment/detail-post-comment/detail-post-comment.component';
import { PostCommentComponent } from './Pages/PostComment/post-comment/post-comment.component';

import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OrderComponent } from './Pages/Order/order/order.component';
import { ChartComponent } from './Pages/Order/chart/chart.component';
import { OrderDetailComponent } from './Order/order-detail/order-detail.component';
import { OrderEditComponent } from './Order/order-edit/order-edit.component';
import { UserComponent } from './Pages/user/user.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogModule } from 'primeng/dialog';
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
    IndexMenuComponent,
    AddMenuComponent,
    EditMenuComponent,
    DeleteMenuComponent,
    EditSuppliersComponent,
    DeleteSuppliersComponent,
    AddSuppliersComponent,
    IndexSuppliersComponent,
    IndexSliderComponent,
    AddSliderComponent,
    EditSliderComponent,
    IndexBlogCategoryComponent,
    AddBlogCategoryComponent,
    EditBlogCategoryComponent,
    ProductCommentComponent,
    DetailProductCommentComponent,
    DetailPostCommentComponent,
    PostCommentComponent,
    OrderComponent,
    ChartComponent,
    OrderDetailComponent,
    OrderEditComponent,
    UserComponent,
    



  ],
  imports: [
    CommonModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    MatDialogModule, 
    MatButtonModule,
    ButtonModule,
    DialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    CKEditorModule,
    EditorModule, 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule,
    ToastModule,
    NgToastModule,
    MatCheckboxModule,
    FileUploadModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
