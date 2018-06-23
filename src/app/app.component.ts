import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  mapOptions = {
    lat: 49.232791,
    lng: 28.469133,
    zoom : 13
  };
  private Url = 'http://localhost:3000';

  markers: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get(this.Url + '/api/all_checkins').subscribe(
      value => this.markers = value,
      err => console.log(err),
    );
  }
  addCheckin(event) {
    console.log(event);
  }
  showInfo(event) {
    console.log(event);
  }
}
