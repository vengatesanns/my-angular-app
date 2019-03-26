import { Component } from "@angular/core";
import { SharedService } from "src/app/commonutilities/sharedservice.service";
import { VtColumnNameDef } from "src/app/commonutilities/customtable/vt-grid.model";


@Component({
    selector: 'userlist',
    templateUrl: './userlist.html',
})
export class UserListComponent {

    rowData = [];

    columnDef = ["S.no", "Name", "Place", "Phno"];


    // columnHeaderValues: Array<VtColumnNameDef> = [
    //     { fieldName: 'make', columnName: 'S.No', width: '', height: '' },
    //     { fieldName: 'model', columnName: 'Name', width: '', height: '' },
    //     { fieldName: 'price', columnName: 'Role', width: '', height: '' },
    //     { fieldName: 'make', columnName: 'Mob.No', width: '', height: '' },
    //     { fieldName: 'make', columnName: 'Active', width: '', height: '' },
    // ]

    constructor(private sharedService: SharedService) {
        this.getUserDetails();

    }

    getUserDetails() {
        this.sharedService.getUserDetails().then(data => {
            this.rowData = data.json();
        });
    }


    displayedColumns = ["Id", "Username", "Role", "Created Date", "Active"];

    columnDefs = [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' }
    ];

    // rowData = [
    //     { make: 'Toyota', model: 'Celica', price: 35000 },
    //     { make: 'Ford', model: 'Mondeo', price: 32000 },
    //     { make: 'Porsche', model: 'Boxter', price: 72000 }
    // ];


}