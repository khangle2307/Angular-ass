import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductsService } from 'src/app/services/products.service';
import IProduct from 'src/models/product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  product: { name: string; price: number; img: string; status: boolean } = {
    name: '',
    price: 0,
    img: '',
    status: true,
  };

  createMessage(type: string): void {
    this.message.create(type, `Add product ${type}`);
  }

  constructor(
    private productService: ProductsService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.product);
    this.createMessage('success');
    this.productService.addProduct(this.product).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/products');
    });
  }
}
