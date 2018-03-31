import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuoteGridComponent } from './search-quote-grid.component';

describe('SearchQuoteGridComponent', () => {
  let component: SearchQuoteGridComponent;
  let fixture: ComponentFixture<SearchQuoteGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQuoteGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQuoteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
