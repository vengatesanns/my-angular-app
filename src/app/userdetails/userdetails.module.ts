import { NgModule, Component } from "@angular/core";
import { SharedModule } from "../commonutilities/shared.module";
import { UserDetailsComponent } from "./userdetails.component";
import { Routes, RouterModule } from "@angular/router";



export const childRoots: Routes = [{
    path: '',
    component: UserDetailsComponent
}];
@NgModule({
    imports: [SharedModule, RouterModule.forChild(childRoots)],
    declarations: [UserDetailsComponent],
    exports: [UserDetailsComponent]
})
export class UserDetailsModule {

}