import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from 'app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.loginService.login(form.value.username, form.value.password).subscribe(data => {
      const token = data.token;
      localStorage.setItem(`Personal_userInfo`, token);
      this.router.navigate(['admin/dashboard']);
    }, error => {
      const err = JSON.parse(error._body);
      const message = err.reduce((string, item) => string + item.message, '');
      const snackBarRef = this.snackBar.open(message, 'Close', {
        duration: 3000
      });
    });
  }
}