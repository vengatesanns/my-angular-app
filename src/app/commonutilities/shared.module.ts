import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDialogModule, MatSnackBarModule } from "@angular/material";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";


@NgModule({
    exports: [CommonModule,
        MaterialModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        MatDialogModule,
        MatSnackBarModule,
        RouterModule]

})
export class SharedModule {

}