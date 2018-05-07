import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DialogDefaultComponent implements OnInit {
  content;
  constructor(public dialogRef: MatDialogRef<DialogDefaultComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) {
    this.content = data;
  }

  ngOnInit() {
  }

  continue() {
    this.dialogRef.close({
      success: true
    });
  }

  cancel() {
    this.dialogRef.close({
      success: false
    });
  }

}
