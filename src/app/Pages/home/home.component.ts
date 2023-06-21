import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/Services/layout-service.service';
import { OrderService } from 'src/app/Services/order.service';
import { ProductService } from 'src/app/Services/product.service';
import { StatisticsService } from 'src/app/Services/statistics.service';
import { TypeProducts } from 'src/app/Types/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  items!: MenuItem[];

    products!: TypeProducts[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private productService: ProductService, public layoutService: LayoutService,private orderService:OrderService,private  statisticsService: StatisticsService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.getStatistics();
      
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.getDataOrder(documentStyle);

        this.chartOptions = {
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
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    getChartType(documentStyle : any,getMonthlySalesFail:any,getMonthlySalesSusses:any){
        this.chartData = {
            labels:['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
            datasets: [
                {
                    label: 'Sản phẩm hủy',
                    data: getMonthlySalesFail,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'San phẩm thành công',
                    data: getMonthlySalesSusses,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };
    }
    getMonthlySalesFail: any[] = [];
    getMonthlySalesSusses: any[] = [];
    getDataOrder(documentStyle : any){;
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
    productOrderViewCount : any[] = [];
    totalComment : number = 0;
    totalCustomer : number = 0;
    revenue : number = 0;
    totalOrderUnconfirmed: number = 0;
    totalOrder : number = 0;
    getStatistics(){
        this.statisticsService.getStatistical().subscribe({
            next:(res:any)=>{
                this.productOrderViewCount = res.productOrderViewCount;
                this.totalComment = res.totalComment;
                this.totalCustomer = res.totalCustomer;
                this.revenue = res.revenue;
                this.totalOrderUnconfirmed = res.totalOrderUnconfirmed;
                this.totalOrder = res.totalOrder;

            }
        });
    }
}
