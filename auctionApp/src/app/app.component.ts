import { Component } from '@angular/core';
import { Product, ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

}
