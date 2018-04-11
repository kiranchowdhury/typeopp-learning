import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/models/state/app-state';
import { ActionAuthSignIn } from '@app/core/auth/auth.reducer';


@Component({
  selector: 'tl-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  emailPlaceHolder: string;
  pwdPlaceHolder: string;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.emailPlaceHolder = '<mat-icon>email</mat-icon>';
      this.pwdPlaceHolder = '<mat-icon>lock</mat-icon>';
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  submit() {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value ;
    console.log('Logging in for ' + username + '& ' + password);
    this.store.dispatch(new ActionAuthSignIn({username: username, password: password}));
    this.dialogRef.close();
  }

}
