import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
	arr = [1,2,3]
	
  constructor() {  
   
  }  
  ngOnInit(): void {
  }

}
