import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/primeng"
import {ProductService} from "../../services/product/product.service"
import {Message} from 'primeng/primeng';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


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
  productForm: FormGroup;

  constructor(private productService: ProductService, private confirmationService: ConfirmationService, private fb: FormBuilder) {
    this.productForm = fb.group({
      'sku': [null, Validators.required],
      'name': [null, Validators.required],
      'price': [null, Validators.required],
      'quantity': [null, Validators.required],
      'status': false
    });
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

  addProduct(product) {

    this.productService.create(product).then(res => {
      this.response = res;
      if (this.response.status == 200) {
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Product Added', detail: this.response.msg});
        this.productForm.reset();
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
        this.productService.update(product_id, this.p).then(res => {
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
