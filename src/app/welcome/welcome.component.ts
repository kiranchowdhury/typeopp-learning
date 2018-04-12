import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
// import { AuthState, Group, ActionAuthLogin, ActionAuthAuthorize, AuthorizedRequest, LoginRequest } from '../core/auth/auth.reducer';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { Subject } from 'rxjs/Subject';

import { MessageResoureService } from '../common/message-resoure.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tl-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  ico1 = require('../../assets/ic-01.png');
  ico2 = require('../../assets/ic-02.png');
  ico3 = require('../../assets/ic-02.png');

  constructor(private router: Router,
              private store: Store<any>,
              private msgResource: MessageResoureService) {}
  ngOnInit() {}

}
