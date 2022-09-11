import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./service/user.service";
import {initializeAppFactory} from "./initializer/initializer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [UserService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
