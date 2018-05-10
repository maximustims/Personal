import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class DialogPrimaryComponent implements OnInit {

  content;
  constructor(public dialogRef: MatDialogRef<DialogPrimaryComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) {
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
