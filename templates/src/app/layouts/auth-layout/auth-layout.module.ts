import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatInputModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
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
  ]
})
export class WebLayoutModule { }
