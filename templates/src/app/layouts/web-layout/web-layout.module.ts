import { IndexService } from './../../modules/web/modules/index/index.service';
import { Error404Component } from './../../modules/web/modules/error404/error404.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebLayoutRoutes } from './web-layout.routing';
import { IndexComponent } from '../../modules/web/modules/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatInputModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { HttpService } from 'app/services/http.service';

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
  ],
  providers:[
    HttpService,
    IndexService,
    { provide: 'API_BASE_URL', useValue: window.location.origin }
  ]
})
export class WebLayoutModule { }
