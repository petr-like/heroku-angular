import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user.models';
import { UserService } from '../../shared/services/user.service';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';


function ValidPassword (input: FormControl) {
  if (!input.root || !input.root.value) {
    return null;
  }

  return input.value === input.root.value.password ? null : { mismatchedPassword: true };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private userSerivce: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'last_name': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'conf_password': new FormControl(null, [Validators.required, ValidPassword]),
    });
  }
  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }

  onSubmit() {
    const {name, last_name, username, password} = this.form.value;
    const user = new User(name, last_name, username, password);

    this.userSerivce.registration(user)
    .subscribe((json: User) => {
      if (json.message !== 'register' ) {
        this.showMessage (json.message);
      } else {
        this.message.text = '';
        this.router.navigate(['/login']);
      }
    });
  }
}
