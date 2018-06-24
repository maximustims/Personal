import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactManagerService } from '../contact-manager.service';

@Component({
  selector: 'app-contact-detail-manager',
  templateUrl: './contact-detail-manager.component.html',
  styleUrls: ['./contact-detail-manager.component.scss']
})
export class ContactDetailManagerComponent implements OnInit {
  contactData = {};

  constructor(
    public dialogRef: MatDialogRef<ContactDetailManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactManagerService: ContactManagerService,
  ) {
    this.contactManagerService.edit(data.id).subscribe(resp => {
      this.contactData = resp.data;
    })

  }

  ngOnInit() {
  }


  cancel() {
    this.dialogRef.close({
      success: false
    });
  }
}
