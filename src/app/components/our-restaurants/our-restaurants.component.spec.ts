import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRestaurantsComponent } from './our-restaurants.component';

describe('OurRestaurantsComponent', () => {
  let component: OurRestaurantsComponent;
  let fixture: ComponentFixture<OurRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
