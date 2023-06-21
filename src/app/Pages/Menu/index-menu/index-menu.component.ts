import { Component, TemplateRef } from '@angular/core';
import { DeleteMenuComponent } from '../delete-menu/delete-menu.component';
import { MenuService } from 'src/app/Services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { TyMenu, TypeDeleteMenu } from 'src/app/Types/menu';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-index-menu',
  templateUrl: './index-menu.component.html',
  styleUrls: ['./index-menu.component.scss']
})
export class IndexMenuComponent {
  ngOnInit(): void {
    this.handleGetMenu();

  }
  constructor(public dialog: MatDialog,private MenuService: MenuService, private toast: NgToastService) {}
  getMenus: Array<TyMenu> = [];
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteMenuComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  } 
  data : TypeDeleteMenu = {
    id : 0,
    name:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<TypeDeleteMenu>,id:any,name:string) {
    this.dialog.open(templateRef,{
      data: {
        id,
        name
      }
      
    });
  }
  handleGetMenu() {
    this.MenuService.getAllMenu().subscribe({
      next: (item => {
        this.getMenus = item;
        return this.getMenus;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }
  handleDelete(id : any) {
   
  
    this.MenuService.deleteMenu(id).subscribe(
      {
        next: (data => {
          this.handleGetMenu()
          this.toast.success({detail:"Thành công ",summary:"Xóa thành công",duration:5000});
        }),
        error: (err => {
          console.log(err)
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
}
