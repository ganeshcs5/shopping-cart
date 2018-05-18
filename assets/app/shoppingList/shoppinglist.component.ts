import { Component, OnInit } from '@angular/core';
//import { ShoppingService } from './shopping.service';
import { Product } from '../product/prodect.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html'
})

export class ShoppinglistComponent {
items:Product[];
constructor(private productService:ProductService){}
ngOnInit(){
  this.productService.getCart().then((data) => { this.items = data
    console.log(this.items)});

}

onSelect(data:Product){
this.productService.deleteFromCart(data);
this.items.splice(this.items.indexOf(data), 1);

}
}