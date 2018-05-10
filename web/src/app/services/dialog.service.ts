import { Injectable } from '@angular/core';
import { DialogDefaultComponent } from '../components/dialog/default/default.component';
import { DialogSuccessComponent } from '../components/dialog/success/success.component';
import { DialogInfoComponent } from '../components/dialog/info/info.component';
import { DialogWarningComponent } from '../components/dialog/warning/warning.component';
import { DialogDangerComponent } from '../components/dialog/danger/danger.component';
import { MatDialog } from '@angular/material';
import { DialogPrimaryComponent } from '../components/dialog/primary/primary.component';

@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog) { }
  default() {
    let dialogRef = this.dialog.open(DialogDefaultComponent, {
      width: '750px',
      data: {}
    });

    return dialogRef.afterClosed();
  }
  success() {
    let dialogRef = this.dialog.open(DialogSuccessComponent, {
      width: '750px',
      data: {}
    });

    return dialogRef.afterClosed();
  }
  info() {
    let dialogRef = this.dialog.open(DialogInfoComponent, {
      width: '750px',
      data: {}
    });

    return dialogRef.afterClosed();
  }
  warning() {
    let dialogRef = this.dialog.open(DialogWarningComponent, {
      width: '750px',
      data: {}
    });

    return dialogRef.afterClosed();
  }
  danger() {
    let dialogRef = this.dialog.open(DialogDangerComponent, {
      width: '750px',
      data: {}
    });

    return dialogRef.afterClosed();
  }

  primary() {
    let dialogRef = this.dialog.open(DialogPrimaryComponent, {
      width: '750px',
      data: {}
    });

    return dialogRef.afterClosed();
  }
}
