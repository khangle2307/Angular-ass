import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  product: { name: string; price: number; img: string; status: boolean } = {
    name: '',
    price: 0,
    img: '',
    status: true,
  };

  createMessage(type: string): void {
    this.message.create(type, `Update product ${type}`);
  }

  constructor(
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService
      .getProduct(id)
      .subscribe((data) => (this.product = data));
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      //có id thì bắt đầu call api update
      this.createMessage('success');
      this.productService
        .updateProduct(this.product)
        .subscribe((data) => console.log(data));
      this.router.navigateByUrl('/products');
    } else {
      this.productService.addProduct(this.product).subscribe((data) => {
        this.router.navigateByUrl('/products');
      });
    }
  }
}
