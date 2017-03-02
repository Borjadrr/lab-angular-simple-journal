import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {
  BASE_URL: string = 'http://localhost:3000';

    constructor(private http: Http) {}

    getList() {

    let test =  this.http.get(`${this.BASE_URL}`)
      .map((res) => res.json());
    console.log(test);
    return test;
  }

}
