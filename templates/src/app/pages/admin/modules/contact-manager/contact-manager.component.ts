import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ContactManagerService } from './contact-manager.service';
import { DialogComponent } from '../../../../components/dialog/dialog.component';
import { ContactDetailManagerComponent } from './contact-detail-manager/contact-detail-manager.component';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {

  data = null;

  table = {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    currentPage: 0,
    totalPage: 0,
  };
  filter = {
    search: null,
    roles: null
  };
  queryParams = null;
  constructor(
    private contactManagerService: ContactManagerService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.activeRoute.queryParams.subscribe(data => {
      this.contactManagerService
        .getAll(this.activeRoute.snapshot.queryParams)
        .subscribe(data => {
          let dataResp = data.data;
          this.table = {
            items: dataResp.items,
            totalItems: dataResp.totalItems,
            itemsPerPage: dataResp.itemsPerPage,
            currentPage: dataResp.currentPage - 1,
            totalPage: dataResp.totalPage,
          };

          this.queryParams = JSON.parse(JSON.stringify(this.activeRoute.snapshot.queryParams));
        });
    });
  }

  delete(id) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        header: 'Delete Contact',
        type: 'danger',
        message: 'Are you sure you want to delete this contact?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.contactManagerService.remove(id).subscribe(resp => {
          const snackBarRef = this.snackBar.open('Delete contact success', 'Close', {
            duration: 3000
          });
          this.getData();
        })
      }
    });
  }

  show(id) {
    this.dialog.open(ContactDetailManagerComponent, {
      width: '750px',
      data: { id }
    });
  }
}
