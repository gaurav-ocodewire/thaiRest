import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrederItemCardComponent } from './oreder-item-card.component';

describe('OrederItemCardComponent', () => {
  let component: OrederItemCardComponent;
  let fixture: ComponentFixture<OrederItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrederItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrederItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
