import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { Http } from '@angular/http';

@Injectable()
export class LoginService extends HttpService {

  constructor(http: Http) {
    super(http, 'auth/login');
  }

  login(username: string, password: string) {
    let data = {
      username,
      password
    }
    return this.post(data);
  }
}
