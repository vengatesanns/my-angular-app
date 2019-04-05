import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/commonutilities/shared.module";
import { TaskComponent } from "./task.component";
import { TaskService } from "./task.service";

export const routes: Routes = [
    {
        path: '',
        component: TaskComponent
    }
]

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [TaskComponent],
    exports: [TaskComponent],
    providers: [TaskService]
})
export class TaskModule {

}