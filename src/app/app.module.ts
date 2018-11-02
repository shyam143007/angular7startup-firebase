import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import { NavigationComponent } from './shared/navbar.component'

import { AdminModule } from './admin/admin.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule, 
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
