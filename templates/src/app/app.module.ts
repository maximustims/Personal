import { AuthLayoutComponent } from './pages/auth/layout/auth-layout.component';
import { AuthService } from './services/auth.service';
import { AdminGuard } from './guard/admin/admin.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { WebLayoutComponent } from './pages/web/layout/web-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from './services/http.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { WebComponentsModule } from './pages/web/components/web-components.module';
import { AdminLayoutComponent } from './pages/admin/layout/admin-layout.component';
import { AdminComponentsModule } from './pages/admin/components/admin-components.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'ang4-seo-pre'}),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AdminComponentsModule,
    RouterModule,
    AppRoutingModule,
    WebComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHt2kR9H46CIjvn8BGA3absqf3fwYT7Mg'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WebLayoutComponent,
    AuthLayoutComponent,
    DialogComponent,
  ],
  providers: [
    AdminGuard,
    HttpService,
    AuthService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
