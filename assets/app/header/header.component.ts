import { Product } from './../product/prodect.model';
import { ProductService } from './../product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
public count:number = 0;
  constructor(private productService:ProductService){
    this.count = productService.count;
  }
  ngOnInit() {
    
  }
}
