import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { LoginComponent } from './components/login/login.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainComponent,
    CheckinComponent,
    LoginComponent,
    CabinetComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA82Mg78BbIG7Ct6KkGzk8Nd36rPAQ7Pw'
    }),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
