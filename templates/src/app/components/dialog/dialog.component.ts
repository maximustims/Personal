import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  type = '';
  header = '';
  message = '';
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.type = this.data.type || 'default';
      this.header = this.data.header || 'Header';
      this.message = this.data.message || 'Content';
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
