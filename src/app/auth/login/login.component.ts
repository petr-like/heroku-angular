import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.models';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;


  constructor(
    private userservice: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required]), // Валидатор на логин
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)]) // Валидатор на ввод пароля, минимум 3 символа
    });
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }

  onSubmit() {
    const data = this.form.value;
    this.userservice.login(data)
      .subscribe((user: User) => {
        if (user.message) {
          this.showMessage (user.message);
        } else {
          this.message.text = '';
          this.authService.login(user);
          this.router.navigate(['/']);
        }
      });
  }
}
