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
import { SharedService } from './commonutilities/sharedservice.service';
import { SnackBarService } from './commonutilities/snackbarservice.service';
import { AgGridModule } from 'ag-grid-angular';

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
        path: 'usercreation',
        loadChildren: './userdetails/userdetails.module#UserDetailsModule'
      },
      // {
      //   path: '',
      //   loadChildren: './dashboard/userlist/userlist.module#UserListModule'
      // },
      {
        path: '',
        loadChildren: './dashboard/taskmodule/task.module#TaskModule'
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
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([])
  ],
  providers: [SharedService, SnackBarService],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [RouterModule]
})
export class AppModule { }
