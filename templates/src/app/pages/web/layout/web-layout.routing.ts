import { Routes } from '@angular/router';
import { IndexComponent } from './../modules/index/index.component';
import { Error404Component } from './../modules/error404/error404.component';
import { WebComponent } from '../modules/web/web.component';
import { ChatComponent } from '../modules/chat/chat.component';

export const WebLayoutRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'web',
        component: WebComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];
