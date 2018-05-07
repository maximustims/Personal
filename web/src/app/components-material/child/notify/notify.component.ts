import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogDefaultComponent } from '../../../components/dialog/default/default.component';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
    // this.snackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: 500,
    // });

  }


  ngOnInit() {
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogDefaultComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
  openSnackbar(){
    this.snackBar.openFromComponent(DialogDefaultComponent);
  }
}
