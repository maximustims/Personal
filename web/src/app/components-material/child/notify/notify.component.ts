import { DialogService } from './../../../services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogDefaultComponent } from '../../../components/dialog/default/default.component';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, private dialogService: DialogService) {
    // this.snackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: 500,
    // });

  }


  ngOnInit() {
  }

  openDialog(type) {
    switch (type) {
      case 'default':
        this.dialogService.default().subscribe(result => {
          console.log(result);
        })
        break;
      case 'success':
        this.dialogService.success().subscribe(result => {
          console.log(result);
        })
        break;
      case 'warning':
        this.dialogService.warning().subscribe(result => {
          console.log(result);
        })
        break;
      case 'danger':
        this.dialogService.danger().subscribe(result => {
          console.log(result);
        })
        break;
      case 'info':
        this.dialogService.info().subscribe(result => {
          console.log(result);
        })
        break;
      default:
        this.dialogService.default().subscribe(result => {
          console.log(result);
        })
        break;
    }
  }
  openSnackbar() {
    // this.snackBar.openFromComponent(DialogDefaultComponent);
  }
}
