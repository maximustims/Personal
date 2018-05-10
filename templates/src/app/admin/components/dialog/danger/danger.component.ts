import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-danger',
  templateUrl: './danger.component.html',
  styleUrls: ['./danger.component.scss']
})
export class DialogDangerComponent implements OnInit {

  content;
  constructor(public dialogRef: MatDialogRef<DialogDangerComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) {
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
