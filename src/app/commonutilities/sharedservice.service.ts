import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { UserDetails } from "../userdetails/userdetails.model";

@Injectable()
export class SharedService {

    baseUrlPath: string = 'http://localhost:7001/home';

    constructor(public http: Http) {
        console.log("loaded...");
    }

    public saveUserDetails(userInfo: UserDetails) {
        return this.http.post(this.baseUrlPath + '/saveUserDetails', userInfo).toPromise().catch(error => {
            console.log("called");
        });
    }
}