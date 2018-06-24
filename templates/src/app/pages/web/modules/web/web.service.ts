import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/http/http.service';
import { Http } from '@angular/http';

@Injectable()
export class WebService extends HttpService{

  constructor(http: Http) {
    super(http, 'web/iframe');
  }
}
