import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CheckinServices {
  url = '//chekins-brain.herokuapp.com';
  constructor(private http: HttpClient) {}

  getAllCheckin() { // get all checkin from set markers
    return this.http.get(this.url + '/api/all_checkins');
  }
  addCheckin(data) { // add new checkin
    return this.http.post(this.url + '/api/addcheckin', data);
  }
}
