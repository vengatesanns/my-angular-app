import { Component, ViewChild } from "@angular/core";
import { Login } from "./login";
import { MatDialogRef, MatSnackBar } from "@angular/material";
import { LoginService } from "./login.service";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: './login.html',
    providers: [LoginService],
    styleUrls: ['./login.scss']
})
export class LoginDialogComponent {

    loginInfo: Login;
    @ViewChild('form') loginForm: NgForm;

    //   usersInfo: Login;

    constructor(private loginDialogReference: MatDialogRef<LoginDialogComponent>,
        private loginService: LoginService,
        public snackBar: MatSnackBar) {
        this.loginInfo = new Login();
        // this.usersInfo = new Login();
    }


    validateUserdetails() {
        if (this.loginInfo.username == null || this.loginInfo.username == '') {
            return;
        }
        else if (this.loginInfo.password == null || this.loginInfo.password == '') {
            return;
        }
        this.getUserDetails();
    }


    getUserDetails() {
        this.loginService.getUserDetails(this.loginInfo).then(response => {
            if (response != null && response.json() != null) {
                this.loginInfo = response.json()[0];
                if (this.loginInfo != null) {
                    this.snackBar.open(this.loginInfo.username + " - Login Successfully", "", { duration: 2000 });
                    this.closeLoginForm('ok');
                }
                else {
                    this.snackBar.open("Please Enter Valid Username/Password", "", { duration: 2000 });
                }
            }
        }, error => {
            this.errorHandler(error);
        });
    }

    errorHandler(error) {
        this.snackBar.open(error.json()["message"], "", { duration: 2000 });
    }

    closeLoginForm(status) {
        if (status === 'ok') {
            this.loginDialogReference.close(this.loginInfo);
        }
        else {
            this.loginDialogReference.close(null);
        }
    }
}