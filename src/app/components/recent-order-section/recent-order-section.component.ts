import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-order-section',
  templateUrl: './recent-order-section.component.html',
  styleUrls: ['./recent-order-section.component.css']
})
export class RecentOrderSectionComponent implements OnInit {
  dummyArray = [0,1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
