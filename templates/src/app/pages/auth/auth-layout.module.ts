import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatInputModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatIconModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { HttpService } from '../../services/http/http.service';
import { NotAdminGuard } from '../../guard/not-admin/not-admin.guard';
import { AuthLayoutRoutes } from './layout/auth-layout.routing';
import { LoginComponent } from './modules/login/login.component';
import { LoginService } from './modules/login/login.service';

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
