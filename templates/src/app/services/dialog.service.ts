import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDefaultComponent } from '../modules/admin/components/dialog/default/default.component';
import { DialogSuccessComponent } from '../modules/admin/components/dialog/success/success.component';
import { DialogInfoComponent } from '../modules/admin/components/dialog/info/info.component';
import { DialogWarningComponent } from '../modules/admin/components/dialog/warning/warning.component';
import { DialogDangerComponent } from '../modules/admin/components/dialog/danger/danger.component';
import { DialogPrimaryComponent } from '../modules/admin/components/dialog/primary/primary.component';

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
