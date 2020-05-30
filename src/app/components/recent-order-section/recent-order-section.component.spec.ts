import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrderSectionComponent } from './recent-order-section.component';

describe('RecentOrderSectionComponent', () => {
  let component: RecentOrderSectionComponent;
  let fixture: ComponentFixture<RecentOrderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentOrderSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentOrderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
