import { Routes } from '@angular/router';
import { DashboardComponent } from '../../modules/admin/modules/dashboard/dashboard.component';
import { ComponentsMaterialComponent } from '../../modules/admin/modules/components-material/components-material.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', },
    { path: 'components-material', component: ComponentsMaterialComponent, pathMatch: 'full', }
];