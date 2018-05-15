import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    host: string = 'http://localhost:2206';
    url: string = '';
    csrfToken;
    constructor(){}

    // constructor(protected http: Http, url: string) {
    //     this.url = url;
    // }

    // get(params = {}, url = null) {
    //     return this.http.get(`${this.host}/${url || this.url}`, {
    //         params,
    //         headers: this.setHeader()
    //     }).map(response => response.json());
    // }

    // post(data, params = {}, url = null) {
    //     return this.http.post(`${this.host}/${url || this.url}`, data, {
    //         params,
    //         headers: this.setHeader()
    //     }).map(response => response.json());
    // }

    // delete(params = {}) {
    //     return this.http.delete(`${this.host}/${this.url}`)
    // }

    // put(data, params = {}) {
    //     return this.http.put(`${this.host}/${this.url}`, data, {
    //         params,
    //         headers: this.setHeader()
    //     });
    // }

    // getAll(params = {}) {
    //     return this.get(params);
    // }

    // create(data, params = {}) {
    //     return this.post(data, params);
    // }

    // edit(id, params = {}) {
    //     return this.http.get(`${this.host}/${this.url}/${id}`, {
    //         params,
    //         headers: this.setHeader()
    //     }).map(response => response.json());
    // }

    // update(id, data, params = {}) {
    //     return this.http.post(`${this.host}/${this.url}/${id}`, data, {
    //         params,
    //         headers: this.setHeader()
    //     }).map(response => response.json());
    // }

    // remove(id, params = {}) {
    //     return this.http.delete(`${this.host}/${this.url}/${id}`, {
    //         params,
    //         headers: this.setHeader()
    //     })
    // }

    // setHeader() {
    //     let headers = new Headers();
    //     headers.append('X-CSRF-TOKEN', this.csrfToken);
    //     headers.append('Authorization', localStorage['Personal_userInfo']);
    //     return headers;
    // }
}
