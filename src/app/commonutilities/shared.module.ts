import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDialogModule, MatSnackBarModule } from "@angular/material";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { PanelModule } from 'primeng/panel';
import { VtGridModule } from "./customtable/vt-grid.module";   //My Custom Grid 

@NgModule({
    exports: [CommonModule,
        MaterialModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        MatDialogModule,
        MatSnackBarModule,
        RouterModule,
        PanelModule,
        VtGridModule]

})
export class SharedModule {

}