import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NgToastService } from 'ng-angular-popup';
import { ModalComponent } from 'src/app/Layouts/modal/modal.component';
import { BrandService } from 'src/app/Services/brand.service';
import { OrderService } from 'src/app/Services/order.service';
import { TyBrand, TypeDeleteBrand } from 'src/app/Types/brand';
import { tySort } from '../../Product/list-product/list-product.component';
import { UserService } from 'src/app/Services/user.service';
import { TyUser } from 'src/app/Types/user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent {
  constructor(public dialog: MatDialog, private orderService: OrderService, private toast: NgToastService,
    private paginator: MatPaginatorIntl, private userService: UserService) {

    paginator.itemsPerPageLabel = 'Hiển thị '
  }

  ngOnInit(): void {
    var resutl = this.getorderALL(1, 3, "orderDate", "asc")
    //  console.log(resutl)
    console.log(this.totalRecord)
    this.orderFormSeach.valueChanges.subscribe({
      next: ((s: any) => {
        const s_split = s.sorts.split("_")
        const sort = s_split[0]
        const typeSort = s_split[1]

        console.log(this.currentPageNumber)
        this.getorderALL(this.currentPageNumber, this.pageSize, sort, typeSort, "fullname", s.search!)



      })
    })
    this.listSort.map(item => {
      console.log(item.name)
    })

    //this.hanldeDataorder(true)
    this.getUserEmail()
  }

  listSort: tySort[] = [
    {
      name: "Giá giảm dần",
      value: "orderDate",
      typeSort: "desc"
    },
    {
      name: "Giá tăng dần",
      value: "orderDate",
      typeSort: "asc"
    },
    {
      name: "Lượt xem",
      value: "orderDate",
      typeSort: "desc"
    }
  ];
  dafaultOption: string = "Giá tăng dần"

  orderFormSeach: FormGroup = new FormGroup({
    search: new FormControl(''),
    sorts: new FormControl(''),

  });

  sort!: string;
  tySort!: string;

  orders: Array<any> = [];
  totalRecord!: number;
  totalPages!: number;
  currentPageNumber!: number;
  hasNextPage!: boolean;
  pageSize!: number;
  defaultStatus: any = [];

  getorderALL(currentPageNumber?: number, pageSize?: number, sort?: string, typeSort?: string, where?: string, search: string = '') {
    this.orderService.getAllOrder(currentPageNumber, pageSize, sort, typeSort, search, where).subscribe(orders => {
      this.orders = orders.data;
      this.defaultStatus = this.orders.map(item => item.isStatus)
      console.log(this.data)
      console.log(orders)
      this.pageSize = orders.pageSize
      this.totalRecord = orders.totalRecords
      this.totalPages = orders.totalPages
      this.currentPageNumber = orders.currentPageNumber
      this.hasNextPage = orders.hasNextPage
      return orders;
    })

  }


  OnHandlePaging(currentPageNumber: number, pageSize: number) {
    this.getorderALL(currentPageNumber, pageSize, "orderDate", "asc")
  }
  counter(i: number) {
    return new Array(i);
  }
  OnActionPaging(action: boolean, currentPageNumber: number, pageSize: number) {
    if (action) {
      const currentPageNumberNext = ++currentPageNumber;

      if (currentPageNumberNext > this.totalPages) {
        console.log("het")
      }
      else {
        this.OnHandlePaging(currentPageNumberNext, pageSize)
      }


    }
    else {
      const currentPageNumberPreviuos = --currentPageNumber;
      this.OnHandlePaging(currentPageNumberPreviuos, pageSize)
    }
  }
  handleDelete(slug: any) {


    this.orderService.deleteOrder(slug).subscribe(
      {
        next: (data => {
          this.getorderALL(1, 3, "price", "asc")
          this.toast.success({ detail: "Thành công ", summary: "Xóa sản phẩm", duration: 5000 });
        }),
        error: (err => {
          console.log(err)
          this.toast.error({ detail: "Thất bại ", summary: `${err.error.Message}`, duration: 5000 });
        })
      }
    )
  }
  data: any = {
    slug: "",
    name: ""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>, slug: any, name: string) {
    this.dialog.open(templateRef, {
      data: {
        name,
        slug
      }

    });
  }
  // list pageSize 
  listPageSize: Array<number> = [2, 4, 5]
  length = 50;
  pageIndex = 0;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.OnHandlePaging(1, this.pageSize)

  }

  listStatusOrder = [{
    name: "Đang chờ xử lý",
    value: 1,

  },
  {
    name: "Xác nhận đơn hàng",
    value: 2,

  },
  {
    name: "Giao hàng thành công",
    value: 3,
  },
  {
    name: "Giao hàng thất bại",
    value: 4,
  }
  ]
  valueStatus = 1;
  handleSelectionChange(value: number): number {

    this.valueStatus = value;
    return this.valueStatus;
  }
  memberId = "";


  handleSelectionUserChange(selectedValue: any): string {
    this.memberId = selectedValue;
    return this.memberId;
    // Thực hiện các hành động khác dựa trên giá trị đã chọn
  }
  //  defaultStatus = 'default_value';

  // HandleEdit
  loading: boolean = false;
  HandleEdit(orderId: string) {
    console.log(this.valueStatus);
    const OrderEditType = {
      memberId: this.memberId,
      isStatus: this.valueStatus,
    };

    console.log(OrderEditType);

    // Bắt đầu hiển thị loading
    this.loading = true;

    this.orderService.updateOrder(orderId, OrderEditType).subscribe({
      next: (data) => {
        console.log(data);
        if (data) {

          this.toast.success({ detail: "Thành công ", summary: "Cập nhật đơn hàng", duration: 5000 });
          this.loading = false;
          this.reloadPage();
        }
      },
      error: (err) => {
        // Xử lý lỗi
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        this.toast.error({ detail: "Thất bại ", summary: "Cập nhật đơn hàng", duration: 5000 });

      },

    });

  }
  reloadPage() {
    location.reload();
  }
  listUserEmail: TyUser[] = [];

  getUserEmail() {
    this.userService.getAllUser().subscribe({
      next: (data => {
        data.map((item: any) => {
          this.listUserEmail.push({
            UserID: item.id,
            UserName: item.firstName + " " + item.lastName,
          })

        }

        )
        return this.listUserEmail;

      }),
      error: (err => { })
    })
  }
  // xuất file ex
  HandleExportCsv() {
    this.orderService.exportToCSV().subscribe({
      next: (csvFile: Blob) => {
        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(csvFile);
        downloadLink.href = url;
        downloadLink.download = `export_${new Date().toISOString()}.csv`;
        downloadLink.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error: any) => {
        this.toast.error({ detail: "Thất bại ", summary: "Xuất file thất bại", duration: 5000 });
      }
    });
  }


}
