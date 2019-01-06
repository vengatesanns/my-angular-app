import { Component, OnInit } from "@angular/core";
import { UserDetails } from "./userdetails.model";
import { SharedService } from "../commonutilities/sharedservice.service";
import { SnackBarService } from "../commonutilities/snackbarservice.service";

@Component({
    selector: 'UserDetails',
    templateUrl: './userdetails.html',
    styleUrls: ['./userdetails.scss']
})
export class UserDetailsComponent implements OnInit {

    userDetails: UserDetails;

    constructor(private sharedService: SharedService,
        private snackBarService: SnackBarService) {

    }

    ngOnInit(): void {
        this.userDetails = new UserDetails();
    }


    saveUserDetails() {
        try {
            this.snackBarService.successMessage("User Details Saved Successfully");
            this.sharedService.saveUserDetails(this.userDetails).then(res => {
                this.snackBarService.successMessage("User Details Saved Successfully");
            }), error => {
                this.snackBarService.errorMessage(error);
            };
        }
        catch (error) {
            this.snackBarService.errorMessage(error);
        }
    }

    clearUserDetails() {
        this.userDetails = new UserDetails();
    }

}