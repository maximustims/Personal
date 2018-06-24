import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { WebManagerFormService } from '../web-manager-form.service';

@Component({
  selector: 'app-web-manager-form',
  templateUrl: './web-manager-form.component.html',
  styleUrls: ['./web-manager-form.component.scss']
})
export class WebManagerFormComponent implements OnInit {

  web = {
    name: null,
    url: null,
    order: null,
  };
  id = null;
  status = '';

  constructor(
    private webManagerFormService: WebManagerFormService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.status = 'edit';
      this.webManagerFormService.edit(this.id).subscribe((resp) => {
        console.log(resp);
        this.web = resp.data;
      })
    }
    else this.status = 'add';
  }

  ngOnInit() {
  }

  submit(form) {
    if (!form.valid) return;
    let message = '';
    if (this.status === 'add') message = 'Add web success';
    if (this.status === 'edit') message = 'Edit web success';

    if (this.status == 'add') {
      this.webManagerFormService.create({
        data: this.web
      }).subscribe(resp => {
        const snackBarRef = this.snackBar.open(message, 'Close', {
          duration: 3000
        });
        this.router.navigate(['/admin/web-manager']);
      }, error => {
        const err = JSON.parse(error._body);
        const message = err.error.message;
        const snackBarRef = this.snackBar.open(message, 'Close', {
          duration: 3000
        });
      });
    }

    if (this.status = 'edit') {
      this.webManagerFormService.update(this.id, {
        data: this.web
      }).subscribe((resp) => {
        const snackBarRef = this.snackBar.open(message, 'Close', {
          duration: 3000
        });
        this.router.navigate(['/admin/web-manager']);
      }, error => {
        const err = JSON.parse(error._body);
        const message = err.error.message;
        const snackBarRef = this.snackBar.open(message, 'Close', {
          duration: 3000
        });
      })
    }
  }

}
