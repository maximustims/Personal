import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { WebFooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MenuComponent,
    WebFooterComponent,
  ],
  exports: [
    MenuComponent,
    WebFooterComponent
  ]
})
export class WebComponentsModule { }
