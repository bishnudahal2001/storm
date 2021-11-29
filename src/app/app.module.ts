import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './head/logo/logo.component';
import { NavComponent } from './head/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlineComponent } from './shared/headline/headline.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { LayoverDirective } from './shared/directive/directive.directive';
import {MatTabsModule} from '@angular/material/tabs';
import { ServiceComponent } from './pages/home/service.component';
import { ContactComponent } from './pages/home/contact.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    LayoutComponent,
    LogoComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    HeadlineComponent,
    TestimonialComponent,
    LayoverDirective,
    ServiceComponent,
    ContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
