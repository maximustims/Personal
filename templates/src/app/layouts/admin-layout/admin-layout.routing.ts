import { UserManagerComponent } from './../../modules/admin/modules/user-manager/user-manager.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../modules/admin/modules/dashboard/dashboard.component';
import { WebManagerComponent } from '../../modules/admin/modules/web-manager/web-manager.component';
import { ContactManagerComponent } from '../../modules/admin/modules/contact-manager/contact-manager.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', },
    { path: 'user-manager', component: UserManagerComponent, pathMatch: 'full', },
    { path: 'web-manager', component: WebManagerComponent, pathMatch: 'full', },
    { path: 'contact-manager', component: ContactManagerComponent, pathMatch: 'full', }
];