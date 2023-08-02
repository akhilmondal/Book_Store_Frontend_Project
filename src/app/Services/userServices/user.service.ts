import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) {}

  login(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.httpservice.postService('users/login', reqdata, false, header);
  }

  register(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.httpservice.postService('users', reqdata, false, header);
  }
}
