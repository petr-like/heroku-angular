import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { MainComponent } from './main/main.component';
import { CheckinServices } from './shared/services/checkin.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA82Mg78BbIG7Ct6KkGzk8Nd36rPAQ7Pw'
    }),
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthService, CheckinServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
