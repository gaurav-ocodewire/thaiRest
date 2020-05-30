import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public innerWidth: any;

  constructor() { }
  ngOnInit() {
      this.innerWidth = window.innerWidth + 'px';
      console.log( this.innerWidth )
  }
 

 

}
