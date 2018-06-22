import { Routes } from '@angular/router';
import { NotAdminGuard } from 'app/guard/not-admin/not-admin.guard';
import { LoginComponent } from '../modules/login/login.component';

export const AuthLayoutRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAdminGuard],
    },
];
