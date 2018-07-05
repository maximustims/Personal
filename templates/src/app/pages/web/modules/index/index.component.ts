import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isContacted = false;

  constructor(private indexService: IndexService) {
    if(localStorage['isContacted']) this.isContacted = true;
  }

  ngOnInit() {
    console.log(document.styleSheets);
  }

  submit(form){
    if (!form.valid) {
      return;
    }
    let data = form.value;
    this.indexService.post({data}).subscribe(resp=>{
      this.isContacted = true;
      localStorage.setItem(`isContacted`, '1');
    })
  }
}
