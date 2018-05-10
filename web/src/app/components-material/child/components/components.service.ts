import { HttpService } from './../../../services/http.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComponentsService extends HttpService {

  constructor(http: Http) {
    super(http, 'api/index');
  }

}
