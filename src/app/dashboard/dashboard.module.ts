import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { LoginDialogComponent } from "../login/login.component";
import { LoginDialogModule } from "../login/login.module";
import { SharedModule } from "../commonutilities/shared.module";

@NgModule({
    imports: [SharedModule, LoginDialogModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    entryComponents: [LoginDialogComponent]
})
export class DashboardModule {

}