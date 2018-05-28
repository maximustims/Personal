import { LoginComponent } from './../../modules/auth/modules/login/login.component';
import { Routes } from '@angular/router';
import { NotAdminGuard } from '../../guard/not-admin/not-admin.guard';

export const AuthLayoutRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAdminGuard],
    },
];
