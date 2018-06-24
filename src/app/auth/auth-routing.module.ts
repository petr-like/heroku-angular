import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {path: 'login', component: AuthComponent, children: [
      {path: '', component: LoginComponent}
    ]},
    {path: 'registration', component: AuthComponent, children: [
      {path: '', component: RegistrationComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
