import { Component, OnInit } from '@angular/core';
import { UserManagerService } from './user-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  constructor(private userManagerService: UserManagerService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.userManagerService.getAll(this.activeRoute.snapshot.queryParams)
      .subscribe(data => {
        // console.log(data);
      });
  }
}
