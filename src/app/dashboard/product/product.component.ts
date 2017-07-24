import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service"
import {CookieService} from "angular2-cookie/core"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  response: any = {};

  constructor(private productService: ProductService, private cookie: CookieService) {
  }

  ngOnInit() {
    this.loadProducts();
  }


  loadProducts() {
    var token = {token: this.cookie.get('user_token')};
    this.productService.productList(token).then((res) => {
      this.response = res;
      if (this.response.status == 200) {
        this.products = this.response.data;
      }
    })


  }

}
