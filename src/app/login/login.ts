import { BaseModel } from "../dashboard/basemodel.model";

export class Login extends BaseModel {
    username: string;
    password: string;
    role: string;
}