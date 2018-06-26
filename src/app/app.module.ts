import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

// MOdule
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Service
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { CheckinServices } from './shared/services/checkin.service';

// Component
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InfowindowComponent } from './main/infowindow/infowindow.component';
import { InfomarkerComponent } from './main/infomarker/infomarker.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfowindowComponent,
    InfomarkerComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA82Mg78BbIG7Ct6KkGzk8Nd36rPAQ7Pw'
    }),
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [UserService, AuthService, CheckinServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
