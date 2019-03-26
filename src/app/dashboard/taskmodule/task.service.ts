import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task_Details } from "./task.model";

@Injectable()
export class TaskService {


    constructor(private httpClient: HttpClient) {

    }



    saveTaskDetails(taskInfo: Task_Details) {
        return this.httpClient.post("http://localhost:8765/task-service/home/task/saveUserTask-feign/" + taskInfo.moduleId, taskInfo);
    }


}