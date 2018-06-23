import { Component, OnInit } from '@angular/core';
import { UserManagerService } from './user-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { user_roles, search_role } from 'app/global/User';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  user_roles = null;
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

  constructor(private userManagerService: UserManagerService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.user_roles = user_roles;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.activeRoute.queryParams.subscribe(data => {
      this.userManagerService
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
          this.filter.search = this.queryParams.search;
          this.filter.roles = this.queryParams.roles;
        });
    });
  }

  getRoleString(roles) {
    return roles
      .map(role => search_role(role).title)
      .join(', ');
  }
  search() {
    this.router.navigate(['admin/user-manager'], {
      queryParams: this.filter
    });
    this.getData();
  }

  clearSearch() {
    this.router.navigate(['admin/user-manager']);
    this.getData();
  }

  setPage(pageInfo) {
    this.queryParams.page = pageInfo.offset + 1;
    this.queryParams.limit = this.table.itemsPerPage;

    this.router.navigate(['admin/user-manager'], {
      queryParams: this.queryParams
    });
    this.getData();

  }
}
