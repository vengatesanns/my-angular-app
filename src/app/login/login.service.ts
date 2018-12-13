import { Injectable } from "@angular/core";
import { Login } from "./login";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {


    loginPath: string = 'http://localhost:7001/home/getLoginUserDetails';

    constructor(public http: Http) {

    }

    public getUserDetails(loginModel: Login) {
        return this.http.post(this.loginPath, loginModel).toPromise();
    }

}