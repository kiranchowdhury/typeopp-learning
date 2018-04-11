import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn;
  @Output() loginEvent = new EventEmitter();
  @Output() signupEvent = new EventEmitter();

  logo = require('../../../assets/Logo_typeopplæring.png');
  constructor() { }

  ngOnInit() {
  }

  onLoginClick() {
    this.loginEvent.emit();
  }

  onSignupClick() {
    this.signupEvent.emit();
  }

}
