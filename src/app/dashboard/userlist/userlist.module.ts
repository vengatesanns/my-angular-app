import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/commonutilities/shared.module";
import { UserListComponent } from "./userlist.component";
import { RouterModule } from "@angular/router";


export const childRoots = [{
    path: '',
    component: UserListComponent
}]

@NgModule({
    imports: [SharedModule, RouterModule.forChild(childRoots)],
    declarations: [UserListComponent],
    exports: [UserListComponent]
})
export class UserListModule {

}