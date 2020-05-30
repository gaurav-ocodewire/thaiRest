import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { NguCarouselConfig } from '@ngu/carousel';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
   

    @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;
    @ViewChild('nav') slider: NgImageSliderComponent;

  name = 'Angular';
  dummyArray = [0,1,2,3]
  imageObjectFood = [{
    image: './../../../assets/img/fIcon.png',
    thumbImage: './../../../assets/img/fIcon.png',
    title: 'Thai'
}, {
  image: './../../../assets/img/fIcon.png',
  thumbImage: './../../../assets/img/fIcon.png',
  title: 'Thai'
}, {
  image: './../../../assets/img/fIcon.png',
  thumbImage: './../../../assets/img/fIcon.png',
  title: 'Thai'
},{
  image: './../../../assets/img/fIcon.png',
  thumbImage: './../../../assets/img/fIcon.png',
  title: 'Thai'
}, {
  image: './../../../assets/img/fIcon.png',
  thumbImage: './../../../assets/img/fIcon.png',
  title: 'Thai'
}, {
  image: './../../../assets/img/fIcon.png',
  thumbImage: './../../../assets/img/fIcon.png',
  title: 'Thai'
}];
  imageObject = [{
      image: './../../../assets/img/01_Home_23.jpg',
      thumbImage: './../../../assets/img/01_Home_23.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.'
  },{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.'
  }];
  

  ////////////////////////////
  title = 'ng-swiper-demo';

  slideData = [
    {
      id: 382,
      name: "Metal bluetooth cyan",
    }, {
      id: 822,
      name: "Avon",
    }, {
      id: 159,
      name: "Infrastructures",
    }, {
      id: 424,
      name: "Users Cotton",
    }, {
      id: 572,
      name: "Haptic Oklahoma Jewelery",
    }, {
      id: 127,
      name: "Circles Integration Street",
    }, {
      id: 1009,
      name: "uniform Communications Tuna",
    }, {
      id: 619,
      name: "North Carolina",
    }, {
      id: 716,
      name: "Eyeballs Rubber",
    }, {
      id: 382,
      name: "Nevada green unleash",
    }
  ]

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };
 

  ///////////////////////////
  constructor() { }

  ngOnInit(): void {
  }

 
}
