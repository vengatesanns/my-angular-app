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

    getUserTasks() {
        this.taskService.getUserTasks().subscribe(response => {
            console.log('Task info', response);
        },
            error => {
                this.snackBar.errorMessage("Error while saving Task Details");
            });
    }

    resetTaskDetails() {
        this.taskForm.reset();
    }

}