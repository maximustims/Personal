import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../user-manager.service';
import { MatSnackBar } from '@angular/material';
import { user_roles } from 'app/global/User';
import { ActivatedRoute, Router } from '@angular/router';
import { PatternValidator } from 'app/validators/pattern.validators';

@Component({
  selector: 'app-user-manager-form',
  templateUrl: './user-manager-form.component.html',
  styleUrls: ['./user-manager-form.component.scss']
})
export class UserManagerFormComponent implements OnInit {
  user_roles = null;
  status = '';
  pattern = {
    email: PatternValidator.EMAIL_REGEXP
  };
  constructor(
    private userManagerService: UserManagerService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.user_roles = user_roles;
    if (this.activatedRoute.snapshot.params.id) {
      this.status = 'edit';
    }
    else {
      this.status = 'add';
    }
  }

  ngOnInit() {
  }

  submit(form) {
    if (!form.valid) return;
    this.userManagerService.create({
      data: form.value
    }).subscribe(resp => {
      let message = '';
      if (this.status === 'add') {
        message = 'Add user success';
      }
      if (this.status === 'edit') {
        message = 'Edit user success';
      }
      const snackBarRef = this.snackBar.open(message, 'Close', {
        duration: 3000
      });
      this.router.navigate(['/admin/user-manager']);
    }, error => {
      const err = JSON.parse(error._body);
      const message = err.error.message;
      const snackBarRef = this.snackBar.open(message, 'Close', {
        duration: 3000
      });
    });
  }

}
