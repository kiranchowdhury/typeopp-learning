import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { AppState } from '../core/models/app-state';
import { environment as env } from '@env/environment';
// import { ActionAuthSignInSuccess, ActionAuthSignIn, selectorAuth } from '../core/auth/auth.reducer';
import { routerTransition } from '../core/animations/router.transition';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { ActionRefLoadQuoteStatusReasoncodes } from '../core/reference/refdata.reducer';

@Component({
  selector: 'tl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  displayWelcome$: Observable<boolean>;
  loading$: Observable<boolean>;
  loadingMsg$: Observable<string>;
  envs = [{
    id: 'il4174',
    name: 'IL4174 (Solution Server)'
  },
  {
    id: 'il4113',
    name: 'IL4113 (Integration Server)'
  },
  {
    id: 'il1109',
    name: 'IL1109 (Quickfix Server)'
  },
  {
    id: 'cdtdevdir',
    name: 'CDT Dev Server'
  },
  {
    id: 'cdtmaint',
    name: 'CDT Maint Server'
  }]
  errorMessage$: Observable<string>;
  logo = require('../../assets/logo_white_small.png');
  form: FormGroup = new FormGroup({
    env: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
        private store: Store<any>,
        private router: Router) { }



  ngOnInit() {
    const isDevelopment = (env.envName === 'DEV');
    console.log('isDevelopment =', isDevelopment);
    if (!isDevelopment) {
      console.log('App running in prod mode');
      this.router.navigate(['/welcome']);
    } else {
      console.log('App running in dev mode, custom sign in form will be displayed');
    }
  }

  submit() {
    this.errorMessage$ = this.store.select(state => state.auth.errorMessage);
    this.loading$ = this.store.select(state => state.auth.loading);
    this.loadingMsg$ = this.store.select(state => state.auth.loadingMsg);
    this.displayWelcome$ = this.store.select(state => state.auth.displayWelcome);
    // this.store.dispatch(new ActionAuthSignIn(
    //   {
    //     username: this.form.get('username').value,
    //     password: this.form.get('password').value,
    //     env: this.form.get('env').value
    //   }
    // ))
  }

}
