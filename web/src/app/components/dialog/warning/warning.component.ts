import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class DialogWarningComponent implements OnInit {

  content;
  constructor(public dialogRef: MatDialogRef<DialogWarningComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) {
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
