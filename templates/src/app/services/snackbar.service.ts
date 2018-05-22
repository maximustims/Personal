import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarDefaultComponent } from '../modules/admin/components/snackbar/default/default.component';

@Injectable()
export class SnackbarService {

  constructor(public snackBar: MatSnackBar,) { }
  default() {
    this.snackBar.openFromComponent(SnackbarDefaultComponent,{
      panelClass: 'snackbar-default',
      duration: 1000
    })
  }
  success() {
    this.snackBar.openFromComponent(SnackbarDefaultComponent,{
      panelClass: 'snackbar-success',
      duration: 1000
    })
  }
  info() {
    this.snackBar.openFromComponent(SnackbarDefaultComponent,{
      panelClass: 'snackbar-info',
      duration: 1000
    })
  }
  warning() {
    this.snackBar.openFromComponent(SnackbarDefaultComponent,{
      panelClass: 'snackbar-warning',
      duration: 1000
    })
  }
  danger() {
    this.snackBar.openFromComponent(SnackbarDefaultComponent,{
      panelClass: 'snackbar-danger',
      duration: 1000
    })
  }

  primary() {
    this.snackBar.openFromComponent(SnackbarDefaultComponent,{
      panelClass: 'snackbar-primary',
      duration: 1000
    })
  }

}
