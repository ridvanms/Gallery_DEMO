import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import {HttpClientModule} from "@angular/common/http"
import { UserModule } from './user/user.module';


import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

    
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    HttpClientModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
