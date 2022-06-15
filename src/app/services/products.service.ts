import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IProduct from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }
  getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  getProduct(id : any) : Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product : any){
    return this.http.post(`http://localhost:3000/products`,product)
  }
  updateProduct(product : any){
    return this.http.put(`http://localhost:3000/products/${product.id}`,product)
  }
  removeProduct(id : number) : Observable<IProduct[]>{
    return this.http.delete<IProduct[]>(`http://localhost:3000/products/${id}`)
  }
}
