import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

export class User {
  constructor(
    public id: number,
    public name: string,
    public lastname: string
  ) {}
}


@Injectable()
export class HttpClientService {
  constructor(
     private httpClient: HttpClient
  ) {
  }
  getAllUsers() {
    console.log('test call');
    return this.httpClient.get<User[]>('http://localhost:8080/users');
  }
}
