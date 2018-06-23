import { UserManagerComponent } from '../modules/user-manager/user-manager.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { WebManagerComponent } from '../modules/web-manager/web-manager.component';
import { ContactManagerComponent } from '../modules/contact-manager/contact-manager.component';
import { UserManagerFormComponent } from '../modules/user-manager/user-manager-form/user-manager-form.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', },
    {
        path: 'user-manager',
        children: [
            {
                path: '',
                component: UserManagerComponent,
                pathMatch: 'full',
            },
            {
                path: 'add',
                component: UserManagerFormComponent,
                pathMatch: 'full',
            },
            {
                path: ':id',
                component: UserManagerFormComponent,
                pathMatch: 'full',
            },
        ]
    },
    { path: 'web-manager', component: WebManagerComponent, pathMatch: 'full', },
    { path: 'contact-manager', component: ContactManagerComponent, pathMatch: 'full', }
];