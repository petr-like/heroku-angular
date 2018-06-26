import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {
  url = '//chekins-brain.herokuapp.com';
  constructor(private http: HttpClient) {}

  login(data) { // check if taken username
    return this.http.post(this.url + '/users/login', data);
  }

  registration(user) { // add new user
    return this.http.post(this.url + '/api/add', user);
  }
}
