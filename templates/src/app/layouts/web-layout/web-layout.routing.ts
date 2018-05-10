import { IndexComponent } from './../../web/modules/index/index.component';
import { Routes } from '@angular/router';
import { Error404Component } from '../../web/modules/error404/error404.component';

export const WebLayoutRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];
