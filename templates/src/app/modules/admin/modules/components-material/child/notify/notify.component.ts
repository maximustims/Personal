import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogComponent } from 'app/components/dialog/dialog.component';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }


  ngOnInit() {
  }

  openDialog(type) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '750px',
      data: {
        type,
        message: 'Test Dialog'
      }
    });

    dialogRef.afterClosed().subscribe(resp =>{
      console.log(resp);
    })
  }
  openSnackbar(type) {
    // if (type === 'default')
    //   this.snackBarSvc.default()
    // else if (type === 'success')
    //   this.snackBarSvc.success()
    // else if (type === 'warning')
    //   this.snackBarSvc.warning()
    // else if (type === 'danger')
    //   this.snackBarSvc.danger()
    // else if (type === 'info')
    //   this.snackBarSvc.info()
    // else if (type === 'primary')
    //   this.snackBarSvc.primary()
    // else
    //   this.snackBarSvc.default()
  }
}
