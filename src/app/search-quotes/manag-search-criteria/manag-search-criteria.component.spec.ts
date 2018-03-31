import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagSearchCriteriaComponent } from './manag-search-criteria.component';

describe('ManagSearchCriteriaComponent', () => {
  let component: ManagSearchCriteriaComponent;
  let fixture: ComponentFixture<ManagSearchCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagSearchCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
