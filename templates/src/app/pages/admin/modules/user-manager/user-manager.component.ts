import { Component, OnInit } from '@angular/core';
import { UserManagerService } from './user-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { user_roles } from 'app/global/User';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  user_roles = null;
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
    this.userManagerService.getAll(this.activeRoute.snapshot.queryParams)
      .subscribe(data => {
        console.log(data);
      });
  }
}
