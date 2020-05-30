import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { NguCarouselModule } from '@ngu/carousel';
import { HeaderComponent } from './components/header/header.component';
import { RecentOrderSectionComponent } from './components/recent-order-section/recent-order-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SliderComponent,
    HeaderComponent,
    RecentOrderSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    NguCarouselModule,
    NgxUsefulSwiperModule ,
    CarouselModule,

      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
