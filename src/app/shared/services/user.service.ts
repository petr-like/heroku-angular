import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.models';


@Injectable()

export class UserService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(data): Observable<User>  {
    return this.http.post(this.url + '/users/login', data)
      .map((user: User) => user ? user : undefined);
  }
}
