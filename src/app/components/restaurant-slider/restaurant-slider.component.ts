import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-slider',
  templateUrl: './restaurant-slider.component.html',
  styleUrls: ['./restaurant-slider.component.css']
})
export class RestaurantSliderComponent implements OnInit {
	arr = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {
  }

}
