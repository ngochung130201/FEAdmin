import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/Layouts/modal/modal.component';
import { SliderService } from 'src/app/Services/slider.service';
import { TySlider } from 'src/app/Types/slider';

@Component({
  selector: 'app-index-slider',
  templateUrl: './index-slider.component.html',
  styleUrls: ['./index-slider.component.scss']
})
export class IndexSliderComponent {
  modalService: any;

  ngOnInit(): void {
    this.handleGetSlider();

  }


  constructor(public dialog: MatDialog,private SliderService: SliderService) {}
  getSliders: Array<TySlider> = [];
   
  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.name = 'World';
	}
  handleGetSlider() {
    this.SliderService.getAllSlider().subscribe({
      next: (item => {
        this.getSliders = item;
        return this.getSliders;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }

  handleDelete(id : any) {
   
  
    this.SliderService.deleteSlider(id).subscribe(
      {
        next: (data => {
          this.handleGetSlider()
        }),
        error: (err => {
         
        })
      }
    )
  }
  data : TySlider = {
    id:0,
    image: "",
    isStatus: true,
    link: "",
    title: ""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<TySlider>,id:any,title:string) {
    this.dialog.open(templateRef,{
      data: {
        id,
        title
      }
      
    });
  }
}
