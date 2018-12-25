import { Component, ViewChild } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Login } from "../login/login";
import { LoginDialogComponent } from "../login/login.component";
import { MatDialog, MatMenuTrigger, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
    selector: "dashboard",
    providers: [],
    templateUrl: "dashboard.html",
    styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

    searchedValue: Observable<any>;
    searchTerm$ = new Subject<any>();
    options: any;
    loginModel: Login;
    dashboardLogoPath: string = '../assets/images/bull-logo.png';
    tooltipStatus: string = '';
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    constructor(private dialog: MatDialog,
        public snackBar: MatSnackBar,
        public router: Router) {
        this.loginModel = new Login();

    }


    /******* Login Dialog ********/
    loginButton() {
        if (this.tooltipStatus !== null && this.tooltipStatus !== '') {
            this.openSignoutMenu();
        }
        else {
            this.openLoginDialog();
        }
    }

    openLoginDialog() {
        let loginDialogReference = this.dialog.open(LoginDialogComponent, {
            height: '310px',
            width: '330px',
        });
        loginDialogReference.afterClosed().subscribe(status => {
            if (status != null) {
                this.loginModel = status;
                this.tooltipStatus = this.loginModel.username + " - " + this.loginModel.role;
                this.router.navigateByUrl('/userdetails');
            }
            else {
                this.loginModel = new Login();
                this.tooltipStatus = '';
            }
        });
    }

    openSignoutMenu() {
        if (this.loginModel.username != null && this.loginModel.username !== '') {
            this.trigger.openMenu();
        }
    }


    triggerMenuValues(menuItem) {
        if (menuItem == 'signout') {
            this.snackBar.open(this.loginModel.username + " - Successfully Logged out");
        }
    }


}