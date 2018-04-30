import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactApiService {

  constructor(private http: HttpClient) { }
  getContacts() (
    return this.http.get (url:'htpps://jsonplaceholder.typicode.com/users');
  )
}
