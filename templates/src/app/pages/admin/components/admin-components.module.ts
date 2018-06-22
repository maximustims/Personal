import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class AdminComponentsModule { }
