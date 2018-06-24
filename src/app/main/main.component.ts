import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckinServices } from '../shared/services/checkin.service';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mapOptions = {
    lat: 49.232791,
    lng: 28.469133,
    zoom : 13
  };
  isLogined: boolean;

  markers: any;
  constructor(
    private checkinServices: CheckinServices,
    private isLogin: AuthService
  ) { }

  ngOnInit() {
    this.isLogined = this.isLogin.isLoggedIn();
    this.checkinServices.getAllCheckin()
      .subscribe(
        value => this.markers = value,
        err => console.log(err),
    );
  }

  logout() {
    this.isLogined = this.isLogin.logout();
  }

  addCheckin(event) {
    console.log(event);
  }

  showInfo(event) {
    console.log(event);
  }
}
