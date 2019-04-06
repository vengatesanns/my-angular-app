import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task_Details } from "./task.model";
import { forkJoin } from "rxjs";

@Injectable()
export class TaskService {


    constructor(private httpClient: HttpClient) {

    }



    saveTaskDetails(taskInfo: Task_Details) {
        return this.httpClient.post("http://localhost:8765/task-service/home/task/saveUserTask-feign/" + taskInfo.moduleId,
            taskInfo);
    }


    //ForkJoin
    saveTaskDetailsAndFetchTaskInfo(taskInfo: Task_Details) {
        let saveRequest = this.httpClient.post("http://localhost:8765/task-service/home/task/saveUserTask-feign/" + taskInfo.moduleId,
            taskInfo);
        let fetchRequest = this.httpClient.get("http://localhost:8765/task-service/home/task/getUserTasks/");
        return forkJoin([saveRequest, fetchRequest]);
    }

}