import { Routes } from '@angular/router';
import { IndexComponent } from './../modules/index/index.component';
import { Error404Component } from './../modules/error404/error404.component';

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
