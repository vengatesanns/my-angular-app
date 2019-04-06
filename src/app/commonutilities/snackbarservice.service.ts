import { MatSnackBar } from "@angular/material";
import { Injectable } from "@angular/core";

@Injectable()
export class SnackBarService {
    constructor(public snackBar: MatSnackBar) {

    }

    successMessage(messageInfo: string) {
        this.snackBar.open(messageInfo, "", { duration: 2000, panelClass: ['green-snackbar'] });
        console.info(messageInfo);
    }

    errorMessage(messageInfo: string) {
        this.snackBar.open(messageInfo, "", { duration: 2000, panelClass: ['red-snackbar'] });
        console.error(messageInfo);
    }
}