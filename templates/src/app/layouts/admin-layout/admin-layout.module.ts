import { UserManagerComponent } from './../../modules/admin/modules/user-manager/user-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../modules/admin/modules/dashboard/dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
} from '@angular/material';
import { WebManagerComponent } from '../../modules/admin/modules/web-manager/web-manager.component';
import { ContactManagerComponent } from '../../modules/admin/modules/contact-manager/contact-manager.component';
import { UserManagerService } from '../../modules/admin/modules/user-manager/user-manager.service';
import { HttpService } from 'app/services/http.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxDatatableModule
  ],
  declarations: [
    DashboardComponent,
    UserManagerComponent,
    WebManagerComponent,
    ContactManagerComponent
  ],
  providers: [
    HttpService,
    UserManagerService,
    { provide: 'API_BASE_URL', useValue: window.location.origin }
  ],
  entryComponents: [
  ]
})

export class AdminLayoutModule { }
