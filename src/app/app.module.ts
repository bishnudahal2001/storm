import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './head/logo/logo.component';
import { NavComponent } from './head/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    LayoutComponent,
    LogoComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
