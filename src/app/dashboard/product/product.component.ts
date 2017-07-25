import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/primeng"
import {ProductService} from "../../services/product/product.service"
import {Message} from 'primeng/primeng';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ConfirmationService]
})
export class ProductComponent implements OnInit {
  products: any[];
  response: any = {};
  msgs: Message[] = [];
  displayDialog: boolean;
  p: any = {};
  constructor(private productService: ProductService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.loadProducts();
  }


  loadProducts() {
    this.productService.productList().then((res) => {
      this.response = res;
      if (this.response.status == 200) {
        this.products = this.response.data;
      }
    })
  }

  addProduct(sku, name, price, quantity, status) {
    var data = {sku: sku, name: name, price: price, quantity: quantity, status: true};
    this.productService.create(data).then(res => {
      this.response = res;
      if (this.response.status == 200) {
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Product Added', detail: this.response.msg});
        this.loadProducts();
      }
      else {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Product Error', detail: 'Failed to add the product'});
      }

    })
  }

  deleteProduct(product) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to DELETE ?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.productService.delete(product._id).then(res => {
          this.response = res;

          if (this.response.status == 200) {
            this.msgs = [{severity: 'success', summary: 'Success', detail: this.response.msg}];
            this.loadProducts();
          }
          else {
            this.msgs = [{severity: 'error', summary: 'Success', detail: 'Error while deleting product'}];
          }

        })

      },
      reject: () => {
        this.msgs = [{severity: 'error', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

  showUpdate(product) {
    this.p = product;
    this.displayDialog = true;
  }

  updateProduct(product_id) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to UPDATE ?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.productService.update(product_id,this.p).then(res => {
          this.response = res;
          if (this.response.status == 200) {
            this.displayDialog = false;
            this.msgs = [{severity: 'success', summary: 'Success', detail: this.response.msg}];
            this.loadProducts();
          }
          else {
            this.msgs = [{severity: 'error', summary: 'Success', detail: 'Error while updating product'}];
          }

        })

      },
      reject: () => {
        this.msgs = [{severity: 'error', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

}
