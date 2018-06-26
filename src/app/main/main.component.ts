import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  coords = {
    lat: +'',
    lng: +'',
    open: false
  };
  markers: any;

  marker = {
    open: false,
    description: '',
    rating: '',
    title: '',
    user: '',
    id: ''
  };

  constructor(
    private checkinServices: CheckinServices,
    private isLogin: AuthService
  ) { }

  ngOnInit() {
    this.isLogined = this.isLogin.isLoggedIn();
    this.checkinServices.getAllCheckin() // get all checkin in services from markers
      .subscribe(
        value => this.markers = value,
        err => console.log(err),
    );
  }

  logout() {
    this.isLogined = this.isLogin.logout();
  }

  addCheckin(event) { // add new checkin
    if (!this.isLogin.isLoggedIn()) { // check if user logged
      alert('You can add new checkin after registration');
      return;
    }
    if (this.marker.open) { // check if open info marker window
      this.marker.open = false;
    }
    this.coords = { // coords from new checkin
        lat: event.coords.lat,
        lng: event.coords.lng,
        open: true
    };
  }

  showInfo(marker) { // for info window marker
    if (this.coords.open) { // check if open infowfindow from new checkin
      this.coords.open = false;
    }
    this.marker = { // data from info marker
      open: true,
      description: marker.description,
      rating: marker.rating,
      title: marker.title,
      user: marker.user,
      id: marker._id
    };
  }
}
