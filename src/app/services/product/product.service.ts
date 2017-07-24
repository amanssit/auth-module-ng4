import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http"
import {HttpService} from "../http-service/http-service.service"

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProductService {

  constructor(private http: HttpService) {
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  private productUrl = 'http://localhost:3000/product';

  create(product): Promise<any> {
    return this.http.post(this.productUrl, product, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  productList(): Promise<any[]> {
    return this.http.post(this.productUrl + '/list', {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  delete(product_id):Promise<any>{
    return this.http.delete(this.productUrl+'/'+product_id,{headers:this.headers})
      .toPromise()
      .then(res=>res.json())
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
