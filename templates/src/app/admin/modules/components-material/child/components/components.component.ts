import { Component, OnInit } from '@angular/core';
import { ComponentsService } from './components.service';

@Component({
  selector: 'child-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(private compnentsSvc : ComponentsService) {

  }

  ngOnInit() {
  }
  testApi(){
    // this.compnentsSvc.get().subscribe(data=>{
    // })
  }
}
