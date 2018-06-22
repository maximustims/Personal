import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './pages/admin/layout/admin-layout.component';
import { WebLayoutComponent } from './pages/web/layout/web-layout.component';
import { AdminGuard } from './guard/admin/admin.guard';
import { AuthLayoutComponent } from './pages/auth/layout/auth-layout.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [AdminGuard],
        children: [
            {
                path: '',
                loadChildren: './pages/admin/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './pages/auth/auth-layout.module#AuthLayoutModule'
            }
        ]
    },
    {
        path: '',
        component: WebLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './pages/web/web-layout.module#WebLayoutModule'
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
