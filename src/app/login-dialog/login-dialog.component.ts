import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'tl-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  emailPlaceHolder: string;
  pwdPlaceHolder: string;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.emailPlaceHolder = '<mat-icon>email</mat-icon>';
      this.pwdPlaceHolder = '<mat-icon>lock</mat-icon>';
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
