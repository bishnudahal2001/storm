import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './head/logo/logo.component';
import { NavComponent } from './head/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlineComponent } from './shared/headline/headline.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { LayoverDirective } from './shared/directive/directive.directive';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    LayoutComponent,
    LogoComponent,
    NavComponent,
    HomeComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeadlineComponent,
    TestimonialComponent,
    LayoverDirective,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
