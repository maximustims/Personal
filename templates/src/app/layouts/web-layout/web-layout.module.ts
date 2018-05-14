import { LoginComponent } from './../../web/modules/login/login.component';
import { Error404Component } from './../../web/modules/error404/error404.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebLayoutRoutes } from './web-layout.routing';
import { IndexComponent } from '../../web/modules/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatInputModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WebLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  declarations: [
    IndexComponent,
    Error404Component,
    LoginComponent
  ]
})
export class WebLayoutModule { }
