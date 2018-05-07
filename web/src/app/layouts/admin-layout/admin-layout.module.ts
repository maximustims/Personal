import { HttpService } from './../../services/http.service';
import { NotifyComponent } from './../../components-material/child/notify/notify.component';
import { IconsComponent } from './../../components-material/child/icons/icons.component';
import { TableComponent } from './../../components-material/child/table/table.component';
import { FormsComponent } from './../../components-material/child/forms/forms.component';
import { ComponentsComponent } from './../../components-material/child/components/components.component';
import { ComponentsMaterialComponent } from './../../components-material/components-material.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

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
import { LogInComponent } from '../../log-in/log-in.component';
import { ExpansionComponent } from '../../components-material/child/expansion/expansion.component';
import { StepperComponent } from '../../components-material/child/stepper/stepper.component';
import { DialogDefaultComponent } from '../../components/dialog/default/default.component';
import { DialogDangerComponent } from '../../components/dialog/danger/danger.component';
import { DialogInfoComponent } from '../../components/dialog/info/info.component';
import { DialogSuccessComponent } from '../../components/dialog/success/success.component';
import { DialogWarningComponent } from '../../components/dialog/warning/warning.component';
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
    LogInComponent,
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
    DialogWarningComponent
  ],
  providers:[
    HttpService
  ],
  entryComponents:[
    DialogDefaultComponent,
    DialogDangerComponent,
    DialogInfoComponent,
    DialogSuccessComponent,
    DialogWarningComponent
  ]
})

export class AdminLayoutModule {}
