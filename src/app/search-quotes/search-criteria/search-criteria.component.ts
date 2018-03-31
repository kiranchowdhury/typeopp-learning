import { Component, OnInit, Input } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'anms-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {
  @Input() savedCriteria;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  form: FormGroup = new FormGroup({
    selectedCriteria: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
