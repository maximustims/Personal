import { LoginService } from './../../modules/auth/modules/login/login.service';
import { LoginComponent } from './../../modules/auth/modules/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatInputModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { HttpService } from '../../services/http.service';
import { NotAdminGuard } from '../../guard/not-admin/not-admin.guard';

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
    LoginComponent
  ],
  providers: [
    HttpService,
    LoginService,
    NotAdminGuard,
    { provide: 'API_BASE_URL', useValue: window.location.origin }
  ],
})
export class AuthLayoutModule { }
