import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDangerComponent } from '../danger/danger.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class DialogSuccessComponent implements OnInit {
  content;
  constructor(public dialogRef: MatDialogRef<DialogSuccessComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) {
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
