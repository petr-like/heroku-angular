import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infomarker',
  templateUrl: './infomarker.component.html',
  styleUrls: ['./infomarker.component.css']
})
export class InfomarkerComponent implements OnChanges {

  imgStar = 'http://chekins-brain.herokuapp.com/images/star.png';
  stars: number[];

  @Input() infoMarker: {open: boolean, description: string, rating: number, title: string, user: string, id: string};


  constructor() { }

  ngOnChanges(change: SimpleChanges) {
    this.stars = new Array(this.infoMarker.rating);
  }

  toogleWindow() {
    this.infoMarker.open = !this.infoMarker.open;
  }
}
