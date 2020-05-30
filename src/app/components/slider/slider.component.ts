import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  title = 'NgxCarouselLibrary'
	public innerWidth: any
	products: any
	products2: any
	options1: any
	options2: any
	options3: any
	constructor() {
		this.options1 = {
			animation: {
				animationClass: 'transition',
				animationTime: 200,
			},
			swipe: {
				swipeable: true,
				swipeVelocity: 1,
			},
			drag: {
				draggable: true,
				dragMany: true,
			},
			infinite: true,
			autoplay: {
				enabled: true,
				direction: 'right',
				delay: 5000,
				stopOnHover: true,
				speed: 6000,
			},
			breakpoints: [
				{
					width: 768,
					number: 1,
				},
				{
					width: 991,
					number: 3,
				},
				{
					width: 9999,
					number: 4,
				},
			],
		}
		this.options2 = {
			animation: {
				animationClass: 'transition', // done
				animationTime: 200,
			},
			swipe: {
				swipeable: true, // done
				swipeVelocity: 1, // done - check amount
			},
			drag: {
				draggable: true, // done
				dragMany: true, // todo
			},
			infinite: false,
			breakpoints: [
				{
					width: 768,
					number: 1,
				},
				{
					width: 991,
					number: 3,
				},
				{
					width: 9999,
					number: 4,
				},
			],
		}
		this.options3 = {
			animation: {
				animationClass: 'transition', // done
				animationTime: 200,
			},
			swipe: {
				swipeable: true, // done
				swipeVelocity: 1, // done - check amount
			},
			drag: {
				draggable: true, // done
				dragMany: true, // todo
			},
			infinite: true,
			breakpoints: [
				{
					width: 768,
					number: 1,
				},
				{
					width: 991,
					number: 3,
				},
				{
					width: 9999,
					number: 4,
				},
			],
		}
		this.products = []
		this.products.push({
			title: 'RED Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			salePrice: '100.00',
			image: `https://picsum.photos/600/400/?0`,
		})
		this.products.push({
			title: 'YELLOW Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			salePrice: '100.00',
			image: `https://picsum.photos/600/400/?1`,
		})
		this.products.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			salePrice: '100.00',
			image: `https://picsum.photos/600/400/?2`,
		})
		this.products.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?3`,
		})
		this.products.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?4`,
		})
		this.products2 = []
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?5`,
		})
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?6`,
		})
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?7`,
		})
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?8`,
		})
	}
  // constructor() {  
   
  // }  
  ngOnInit(): void {
  }

}
