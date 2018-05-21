import { SnackbarWarningComponent } from './../../admin/components/snackbar/warning/warning.component';
import { SnackbarInfoComponent } from './../../admin/components/snackbar/info/info.component';
import { SnackbarPrimaryComponent } from './../../admin/components/snackbar/primary/primary.component';
import { SnackbarDangerComponent } from './../../admin/components/snackbar/danger/danger.component';
import { DialogPrimaryComponent } from './../../admin/components/dialog/primary/primary.component';
import { ComponentsService } from './../../admin/modules/components-material/child/components/components.service';
import { DialogService } from './../../admin/services/dialog.service';
import { HttpService } from './../../admin/services/http.service';
import { NotifyComponent } from './../../admin/modules/components-material/child/notify/notify.component';
import { IconsComponent } from './../../admin/modules/components-material/child/icons/icons.component';
import { TableComponent } from './../../admin/modules/components-material/child/table/table.component';
import { FormsComponent } from './../../admin/modules/components-material/child/forms/forms.component';
import { ComponentsComponent } from './../../admin/modules/components-material/child/components/components.component';
import { ComponentsMaterialComponent } from './../../admin/modules/components-material/components-material.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../admin/modules/dashboard/dashboard.component';

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
import { ExpansionComponent } from '../../admin/modules/components-material/child/expansion/expansion.component';
import { StepperComponent } from '../../admin/modules/components-material/child/stepper/stepper.component';
import { DialogDefaultComponent } from '../../admin/components/dialog/default/default.component';
import { DialogDangerComponent } from '../../admin/components/dialog/danger/danger.component';
import { DialogInfoComponent } from '../../admin/components/dialog/info/info.component';
import { DialogSuccessComponent } from '../../admin/components/dialog/success/success.component';
import { DialogWarningComponent } from '../../admin/components/dialog/warning/warning.component';
import { SnackbarDefaultComponent } from '../../admin/components/snackbar/default/default.component';
import { SnackbarService } from '../../admin/services/snackbar.service';
import { SnackbarSuccessComponent } from '../../admin/components/snackbar/success/success.component';

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
