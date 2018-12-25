import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './commonutilities/shared.module';
import { ErrorPageModule } from './commonutilities/errorpage/errorpage.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './commonutilities/errorpage/errorpage.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'  //Main Dashboard page
  },
  {
    path: 'dashboard',
    component: DashboardComponent,  //Main Dashboard page
    children: [
      {
        path: 'userdetails',
        loadChildren: './userdetails/userdetails.module#UserDetailsModule'
      }
    ]
  },
  {
    path: '**',
    component: ErrorPageComponent    //Default Error Page
  }];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    ErrorPageModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [RouterModule]
})
export class AppModule { }
