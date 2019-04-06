import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TaskService } from "./task.service";
import { Task_Details } from "./task.model";
import { SnackBarService } from "src/app/commonutilities/snackbarservice.service";


@Component({
    templateUrl: './task.html',
    styleUrls: ['./task.scss']
})
export class TaskComponent {


    constructor(public taskService: TaskService, private snackBar: SnackBarService) {
        this.taskInfo = new Task_Details();
    }


    @ViewChild('form') taskForm: NgForm;
    taskInfo: Task_Details;


    saveTaskDetails() {
        this.taskService.saveTaskDetails(this.taskInfo).subscribe(response => {
            this.snackBar.successMessage("Task Details Saved Successfully");
        },
            error => {
                this.snackBar.errorMessage("Error while saving Task Details");
            });
    }


    //Single Call for multiple Http Request
    saveTaskDetailsAndFetchTaskInfo() {
        this.taskService.saveTaskDetailsAndFetchTaskInfo(this.taskInfo).subscribe(taskResponse => {
            console.log(taskResponse[0]);
            console.log(taskResponse[1]);
        }, error => {
            this.snackBar.errorMessage("Error while saving Task Details");
        });
    }

    resetTaskDetails() {
        this.taskForm.reset();
    }

}