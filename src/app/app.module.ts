import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ MainComponent } from './main/main.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
