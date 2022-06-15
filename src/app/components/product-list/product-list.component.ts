import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductsService } from 'src/app/services/products.service';
import IProduct from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: IProduct[];
  constructor(
    private productService: ProductsService,
    private nzMessageService: NzMessageService
  ) {}

  cancel(): void {
    this.nzMessageService.success('cancel delete success');
  }

  confirm(): void {
    this.nzMessageService.success('delete success');
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
