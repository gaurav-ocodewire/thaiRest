import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-restaurants',
  templateUrl: './our-restaurants.component.html',
  styleUrls: ['./our-restaurants.component.css']
})
export class OurRestaurantsComponent implements OnInit {
  dummyArray = [0,1,2,3]

  constructor() { }

  ngOnInit(): void {
  }

}
