import { HttpService } from 'app/services/http/http.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserManagerService extends HttpService {

  constructor(http: Http) {
    super(http, 'admin/user');
  }

}
