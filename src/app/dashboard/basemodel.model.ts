export class BaseModel {
    createdAt: Date;
    active: boolean;

    public get createdDate() {
        return new Date();
    }


    public set createdDate(date: Date) {
        this.createdAt = new Date();
    }
}  