import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchquotesComponent } from './searchquotes.component';

describe('SearchquotesComponent', () => {
  let component: SearchquotesComponent;
  let fixture: ComponentFixture<SearchquotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchquotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
