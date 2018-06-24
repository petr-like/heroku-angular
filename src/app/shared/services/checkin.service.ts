import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CheckinServices {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAllCheckin() {
    return this.http.get(this.url + '/api/all_checkins');
  }
  addCheckin(data) {
    return this.http.post(this.url + '/api/addcheckin', data);
  }
}
