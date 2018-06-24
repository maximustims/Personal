import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  iframes = [];

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.webService.getAll().subscribe(resp => {
      this.iframes = resp.data;
    })
  }
}
