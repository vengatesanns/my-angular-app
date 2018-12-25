import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";
import { ErrorPageComponent } from "./errorpage.component";

@NgModule({
    imports: [SharedModule],
    declarations: [ErrorPageComponent],
    exports: [ErrorPageComponent],
    entryComponents: []
})
export class ErrorPageModule {

}