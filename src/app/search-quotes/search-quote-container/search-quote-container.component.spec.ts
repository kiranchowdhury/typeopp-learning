import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuoteContainerComponent } from './search-quote-container.component';

describe('SearchQuoteContainerComponent', () => {
  let component: SearchQuoteContainerComponent;
  let fixture: ComponentFixture<SearchQuoteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQuoteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQuoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
