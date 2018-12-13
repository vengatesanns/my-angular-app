import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login/login.component';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {


  // searchedValue: Observable<any>;
  // searchTerm$ = new Subject<any>();
  // options: any;
  // loginModel: Login;

  // constructor(private appService: AppService, private dialog: MatDialog) {
  //   this.appService.search(this.searchTerm$).subscribe(response => {
  //     this.options = response;
  //   });
  // }

  ngOnInit(): void {
  }

  // getSearchedValue(searchedValue) {
  //   this.searchTerm$.next(searchedValue);
  // }

  // /******* Login Dialog ********/
  // openLoginDialog() {
  //   let dialogReference = this.dialog.open(LoginDialogComponent, {
  //     height: '280px',
  //     width: '300px',
  //   });
  //   dialogReference.afterClosed().subscribe(loginData => {
  //     if (loginData != null && loginData != undefined) {
  //       this.loginModel = loginData;
  //       this.triggerLoggedin(this.loginModel);
  //     }
  //   });
  // }


  // triggerLoggedin(loginModel: Login) {
  //   console.log(loginModel);
  //   this.appService.loginService(loginModel).subscribe(response => {
  //     console.log(response);
  //   }, error => {
  //     alert("error" + error);
  //   });
  // }

}
