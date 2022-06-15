import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductsService } from 'src/app/services/products.service';
import IProduct from 'src/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
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

  handleRemove(id: number) {
    this.confirm();
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter((item) => item.id !== id);
    });
  }
}
