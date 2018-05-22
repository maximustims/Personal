import { SnackbarWarningComponent } from './../../modules/admin/components/snackbar/warning/warning.component';
import { SnackbarInfoComponent } from './../../modules/admin/components/snackbar/info/info.component';
import { SnackbarPrimaryComponent } from './../../modules/admin/components/snackbar/primary/primary.component';
import { SnackbarDangerComponent } from './../../modules/admin/components/snackbar/danger/danger.component';
import { DialogPrimaryComponent } from './../../modules/admin/components/dialog/primary/primary.component';
import { ComponentsService } from './../../modules/admin/modules/components-material/child/components/components.service';
import { DialogService } from './../../services/dialog.service';
import { HttpService } from './../../services/http.service';
import { NotifyComponent } from './../../modules/admin/modules/components-material/child/notify/notify.component';
import { IconsComponent } from './../../modules/admin/modules/components-material/child/icons/icons.component';
import { TableComponent } from './../../modules/admin/modules/components-material/child/table/table.component';
import { FormsComponent } from './../../modules/admin/modules/components-material/child/forms/forms.component';
import { ComponentsComponent } from './../../modules/admin/modules/components-material/child/components/components.component';
import { ComponentsMaterialComponent } from './../../modules/admin/modules/components-material/components-material.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../modules/admin/modules/dashboard/dashboard.component';

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
  MatExpansionModule,
  MatStepperModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatSnackBarModule,
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { ExpansionComponent } from '../../modules/admin/modules/components-material/child/expansion/expansion.component';
import { StepperComponent } from '../../modules/admin/modules/components-material/child/stepper/stepper.component';
import { DialogDefaultComponent } from '../../modules/admin/components/dialog/default/default.component';
import { DialogDangerComponent } from '../../modules/admin/components/dialog/danger/danger.component';
import { DialogInfoComponent } from '../../modules/admin/components/dialog/info/info.component';
import { DialogSuccessComponent } from '../../modules/admin/components/dialog/success/success.component';
import { DialogWarningComponent } from '../../modules/admin/components/dialog/warning/warning.component';
import { SnackbarDefaultComponent } from '../../modules/admin/components/snackbar/default/default.component';
import { SnackbarService } from '../../services/snackbar.service';
import { SnackbarSuccessComponent } from '../../modules/admin/components/snackbar/success/success.component';

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
    MatExpansionModule,
    MatStepperModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  declarations: [
    DashboardComponent,
    ComponentsMaterialComponent,
    ComponentsComponent,
    FormsComponent,
    TableComponent,
    IconsComponent,
    ExpansionComponent,
    StepperComponent,
    NotifyComponent,
    DialogDefaultComponent,
    DialogDangerComponent,
    DialogInfoComponent,
    DialogSuccessComponent,
    DialogWarningComponent,
    DialogPrimaryComponent,
    SnackbarDefaultComponent,
    SnackbarDangerComponent,
    SnackbarPrimaryComponent,
    SnackbarSuccessComponent,
    SnackbarInfoComponent,
    SnackbarWarningComponent
  ],
  providers: [
    HttpService,
    DialogService,
    ComponentsService,
    SnackbarService,
    { provide: 'API_BASE_URL', useValue: window.location.origin }
  ],
  entryComponents: [
    DialogDefaultComponent,
    DialogDangerComponent,
    DialogInfoComponent,
    DialogSuccessComponent,
    DialogWarningComponent,
    DialogPrimaryComponent,
    SnackbarDefaultComponent
  ]
})

export class AdminLayoutModule { }
