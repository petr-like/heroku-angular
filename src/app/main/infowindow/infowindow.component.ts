import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Checkin } from '../../shared/models/checkin.model';
import { CheckinServices } from '../../shared/services/checkin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infowindow',
  templateUrl: './infowindow.component.html',
  styleUrls: ['./infowindow.component.css']
})
export class InfowindowComponent implements OnInit {

  form: FormGroup;
  ratingFrom: number[] = [1, 2, 3, 4, 5];

  title: string;
  description: string;
  @Input() outCoord: {lat: number, lng: number, open: boolean};


  constructor(
    private checkinServices: CheckinServices,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      rating: new FormControl(null),
      description: new FormControl()
    });
    this.form.controls['rating'].setValue(this.ratingFrom[0]);
  }

  onSubmit() {
    const {title, description, rating} = this.form.value;
    const coord = {
      lat: this.outCoord.lat,
      lng: this.outCoord.lng
    };
    const user = JSON.parse(localStorage.getItem('user'));
    const chekin = new Checkin(user.id, title, description, rating, coord);
    this.checkinServices.addCheckin(chekin)
      .subscribe(
        value => {
          if (value) {
            window.location.reload();
          }
        },
        err => console.log(err)
      );
  }

  toogleWindow() {
    this.outCoord.open = !this.outCoord.open;
  }
}
