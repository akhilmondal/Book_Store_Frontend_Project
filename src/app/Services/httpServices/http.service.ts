import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseurl = 'http://localhost:3000/api/v1/';

  constructor(private httpClient: HttpClient) {}
  postService(
    url: string,
    reqdata: any,
    token: boolean = false,
    httpOptions: any
  ) {
    return this.httpClient.post(
      this.baseurl + url,
      reqdata,
      token && httpOptions
    );
  }
}
