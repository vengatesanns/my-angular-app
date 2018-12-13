import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginDialogComponent } from "./login.component";
import { MatDialogModule } from "@angular/material";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, MatDialogModule, MaterialModule,
        ReactiveFormsModule,
        FormsModule,],
    exports: [LoginDialogComponent],
    declarations: [LoginDialogComponent]
})
export class LoginDialogModule {

}