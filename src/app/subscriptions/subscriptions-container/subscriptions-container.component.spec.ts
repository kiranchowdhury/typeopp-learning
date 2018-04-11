import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsContainerComponent } from './subscriptions-container.component';

describe('SubscriptionsContainerComponent', () => {
  let component: SubscriptionsContainerComponent;
  let fixture: ComponentFixture<SubscriptionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
