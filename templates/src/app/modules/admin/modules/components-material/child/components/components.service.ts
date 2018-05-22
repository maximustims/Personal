import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpService } from 'app/services/http.service';

@Injectable()
export class ComponentsService extends HttpService {

  constructor(http: Http) {
    super(http, 'api/index');
  }

}
