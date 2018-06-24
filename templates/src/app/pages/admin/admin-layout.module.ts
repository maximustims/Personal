import { UserManagerComponent } from './modules/user-manager/user-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './layout/admin-layout.routing';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
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
import { WebManagerComponent } from './modules/web-manager/web-manager.component';
import { ContactManagerComponent } from './modules/contact-manager/contact-manager.component';
import { UserManagerService } from './modules/user-manager/user-manager.service';
import { HttpService } from 'app/services/http/http.service';
import { UserManagerFormComponent } from './modules/user-manager/user-manager-form/user-manager-form.component';
import { EqualValidator } from 'app/validators/equalValidators.validators';
import { ContactManagerService } from './modules/contact-manager/contact-manager.service';
import { ContactDetailManagerComponent } from './modules/contact-manager/contact-detail-manager/contact-detail-manager.component';

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
    ContactManagerComponent,
    UserManagerFormComponent,
    EqualValidator,
    ContactDetailManagerComponent
  ],
  providers: [
    HttpService,
    UserManagerService,
    ContactManagerService,
    { provide: 'API_BASE_URL', useValue: window.location.origin }
  ],
  entryComponents: [
    ContactDetailManagerComponent
  ]
})

export class AdminLayoutModule { }
