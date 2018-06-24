import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/http/http.service';
import { Http } from '@angular/http';

@Injectable()
export class WebManagerFormService extends HttpService {

  constructor(http: Http) {
    super(http, 'admin/web');
  }

}
