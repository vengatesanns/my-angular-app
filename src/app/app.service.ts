import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Login } from "./login/login";
import { Buffer } from 'buffer';

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient) {

    }

    search(terms: Observable<any>) {
        return terms.pipe(debounceTime(1000),
            distinctUntilChanged(),
            switchMap(term => this.getGlobalSearchedValue(term)));
    }



    getGlobalSearchedValue(searchedValue) {
        console.log(searchedValue);
        return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
    }

    loginService(loginModel: Login) {
        // let x = new HttpParams().set('grant_type', 'password').set("client_id", "developer")
        //     .set("username", "vengat").set("password", "123");
        // debugger;

        // let data = {
        //     'grant_type': 'password',
        //     "client_id": "developer",
        //     "username": "vengat",
        //     "password": "123"
        // }
        //  let test = "grant_type=" + 'password' + '&client_id=' + 'developer' + '&username=' + 'vengat' + '&password=' + '123';
        //  let body = "username=" + 'vengat' + '&password=' + '123';
        let body = new URLSearchParams();
        body.set('username', 'vengat');
        body.set('password', '123');
        body.set('grant_type', 'password');
        body.set('client_id', 'developer')
        debugger;
        var auth = 'Basic ' + new Buffer('developer' + ':' + 'gamer').toString('base64');
        var sampleHeaders = new HttpHeaders().set('Authorization', auth);
        sampleHeaders = sampleHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.httpClient.post('http://localhost:8001/service/oauth/token', body.toString(), {
            headers: new HttpHeaders({
                'Authorization': auth,
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });

        // return this.httpClient.post('http://localhost:8080/home/test', body.toString(), {
        //     headers: new HttpHeaders({
        //         'Authorization': auth,
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     })
        // });
    }
}