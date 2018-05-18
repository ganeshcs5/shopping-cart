import { Observable } from "rxjs/Observable";
import { Http, Headers, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import {Product} from "./prodect.model";


@Injectable()
export class ProductService {
    public count = 0;
    constructor(private http: HttpClient) { }


getProduct(){

    return this.http.get<any>('http://localhost:3000/product')
      .toPromise()
      .then(res => {   return res["obj"]; } );

   //  this.product.slice();
}

storeProduct(data:Product) {
    const body=JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:3000/product', data)
                 .toPromise()
                 .then(res => {   return res; });

}

storeToCart(data:Product) {
    console.log(data)
    const body=JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:3000/product/cart', data)
                 .toPromise()
                 .then(res => {   return res; });

}

getCart(){
    return this.http.get<any>('http://localhost:3000/product/cart')
      .toPromise()
      .then(res => {   return res["obj"]; } );

}

deleteFromCart(data:Product){
     return this.http.delete('http://localhost:3000/product/cart/'+data["_id"])
                .toPromise()
                .then(res => {   return res; });
}

}

interface ID {
    id?: string;
  }