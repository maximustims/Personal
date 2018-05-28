import { ComponentsService } from './../../modules/admin/modules/components-material/child/components/components.service';
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
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { ExpansionComponent } from '../../modules/admin/modules/components-material/child/expansion/expansion.component';
import { StepperComponent } from '../../modules/admin/modules/components-material/child/stepper/stepper.component';

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
  ],
  declarations: [
    DashboardComponent,
    ComponentsMaterialComponent,
    ComponentsComponent,
    FormsComponent,
    TableComponent,
    IconsComponent,
    NotifyComponent,
  ],
  providers: [
    HttpService,
    ComponentsService,
    { provide: 'API_BASE_URL', useValue: window.location.origin }
  ],
  entryComponents: [
  ]
})

export class AdminLayoutModule { }
