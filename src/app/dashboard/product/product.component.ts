import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:any[];
  constructor() { }

  ngOnInit() {
    this.products=[
      {sku:'101',name:'Product 1',price:54.4,status:true},
      {sku:'102',name:'Product 2',price:24.4,status:true},
      {sku:'103',name:'Product 3',price:64.4,status:false},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},
      {sku:'104',name:'Product 4',price:74.4,status:true},

    ];
  }

}
