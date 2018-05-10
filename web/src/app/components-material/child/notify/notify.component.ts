import { DialogService } from './../../../services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogDefaultComponent } from '../../../components/dialog/default/default.component';
import { SnackbarDefaultComponent } from '../../../components/snackbar/default/default.component';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(private snackBarSvc: SnackbarService, private dialogService: DialogService) {
  }


  ngOnInit() {
  }

  openDialog(type) {
    if (type === 'default')
      this.dialogService.default().subscribe(result => { });
    else if (type === 'success')
      this.dialogService.success().subscribe(result => { });
    else if (type === 'warning')
      this.dialogService.warning().subscribe(result => { })
    else if (type === 'danger')
      this.dialogService.danger().subscribe(result => { })
    else if (type === 'info')
      this.dialogService.info().subscribe(result => { })
    else if (type === 'primary')
      this.dialogService.primary().subscribe(result => { })
    else
      this.dialogService.default().subscribe(result => { })
  }
  openSnackbar(type) {
    if (type === 'default')
      this.snackBarSvc.default()
    else if (type === 'success')
      this.snackBarSvc.success()
    else if (type === 'warning')
      this.snackBarSvc.warning()
    else if (type === 'danger')
      this.snackBarSvc.danger()
    else if (type === 'info')
      this.snackBarSvc.info()
    else if (type === 'primary')
      this.snackBarSvc.primary()
    else
      this.snackBarSvc.default()
  }
}
