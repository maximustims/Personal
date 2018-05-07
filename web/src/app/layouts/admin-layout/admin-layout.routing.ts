import { ComponentsMaterialComponent } from './../../components-material/components-material.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LogInComponent } from '../../log-in/log-in.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LogInComponent },
    { path: 'components-material', component: ComponentsMaterialComponent }
];
