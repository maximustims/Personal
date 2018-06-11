import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { Http } from '@angular/http';

@Injectable()
export class IndexService extends HttpService{

  constructor(http: Http) {
    super(http, 'web/contact');
  }
}