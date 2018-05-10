import { ComponentsMaterialComponent } from './../../admin/modules/components-material/components-material.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './../../admin/modules/dashboard/dashboard.component';
import { LogInComponent } from './../../admin/modules/log-in/log-in.component';

export const AdminLayoutRoutes: Routes = [
    { path: '/', redirectTo: 'dashboard', pathMatch: 'full', },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', },
    { path: 'login', component: LogInComponent, pathMatch: 'full', },
    { path: 'components-material', component: ComponentsMaterialComponent, pathMatch: 'full', }
];