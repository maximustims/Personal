import { Component, OnInit } from '@angular/core';
import { DialogComponent } from 'app/components/dialog/dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { WebManagerFormService } from './web-manager-form.service';

@Component({
  selector: 'app-web-manager',
  templateUrl: './web-manager.component.html',
  styleUrls: ['./web-manager.component.scss']
})
export class WebManagerComponent implements OnInit {

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
    private webManagerFormService: WebManagerFormService,
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
      this.webManagerFormService
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

  search() {
    this.router.navigate(['admin/web-manager'], {
      queryParams: this.filter
    });
    this.getData();
  }

  clearSearch() {
    this.router.navigate(['admin/web-manager']);
    this.getData();
  }

  delete(id) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        header: 'Delete Web',
        type: 'danger',
        message: 'Are you sure you want to delete this web?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success) {
        this.webManagerFormService.remove(id).subscribe(resp => {
          const snackBarRef = this.snackBar.open('Delete web success', 'Close', {
            duration: 3000
          });
          this.getData();
        })
      }
    });
  }

  setPage(pageInfo) {
    this.queryParams.page = pageInfo.offset + 1;
    this.queryParams.limit = this.table.itemsPerPage;

    this.router.navigate(['admin/web-manager'], {
      queryParams: this.queryParams
    });
    this.getData();
  }

}
