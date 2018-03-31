import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryQuotePanelComponent } from './expiry-quote-panel.component';

describe('ExpiryQuotePanelComponent', () => {
  let component: ExpiryQuotePanelComponent;
  let fixture: ComponentFixture<ExpiryQuotePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiryQuotePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiryQuotePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
