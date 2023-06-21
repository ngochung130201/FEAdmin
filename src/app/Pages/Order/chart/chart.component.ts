import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
    /**
     *
     */
    constructor(private orderService:OrderService,private toast:NgToastService) {
        
    }
      
        
    
  data: any;

  options: any;
 
  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.getData(documentStyle);
      
      
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };
  }
  getMonthlySalesFail: any[] = [];
  getMonthlySalesSusses: any[] = [];
  getData(documentStyle : any){;
    this.orderService.getMonthlySales().subscribe({
        next:(res:Array<any>)=>{
            res.map((item)=>{
                console.log(item);
                this.getMonthlySalesFail.push(item.totalSalesFail);
                this.getMonthlySalesSusses.push(item.totalSalesSusses );
            })
            this.getChartType(documentStyle,this.getMonthlySalesFail,this.getMonthlySalesSusses);
        }
    });
   
    
    
  }

    getChartType(documentStyle : any,getMonthlySalesFail:any,getMonthlySalesSusses:any) {
        this.data = {
            labels:['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
            datasets: [
                
                {
                    type: 'bar',
                    label: 'Sản phẩm bán được',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: getMonthlySalesSusses,
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Sản phẩm bị huỷ',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data:getMonthlySalesFail
                }
            ]
        };
    }
    HandleExportCsv() {
        this.orderService.exportMonthlySalesToCSV().subscribe({
          next: (csvFile: Blob) => {
            const downloadLink = document.createElement('a');
            const url = window.URL.createObjectURL(csvFile);
            downloadLink.href = url;
            downloadLink.download = `exportmonthlysales_${new Date().toISOString()}.csv`;
            downloadLink.click();
            window.URL.revokeObjectURL(url);
          },
          error: (error: any) => {
            this.toast.error({ detail: "Thất bại ", summary: "Xuất file thất bại", duration: 5000 });
          }
        });
      }
    
}
