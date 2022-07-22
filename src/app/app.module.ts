import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [
    //AppModule,
    LoginComponent,
    RegisterComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
