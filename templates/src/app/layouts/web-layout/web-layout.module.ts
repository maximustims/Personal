import { Error404Component } from './../../web/modules/error404/error404.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebLayoutRoutes } from './web-layout.routing';
import { IndexComponent } from '../../web/modules/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WebLayoutRoutes),
  ],
  declarations: [
    IndexComponent,
    Error404Component
  ]
})
export class WebLayoutModule { }
