import { Component, Input, ContentChildren, TemplateRef, QueryList, AfterViewInit } from "@angular/core";
import { VtColumnNameDef } from './vt-grid.model';

@Component({
    selector: 'vt-grid',
    templateUrl: './vt-grid.html',
    styleUrls: ['./vt-grid.scss']
})
export class VtGridComponent {



    @Input('gridData') gridData: Array<any>;
    // @Input('columnHeaderDef') columnHeaderDef: Array<VtColumnNameDef>;

    @Input('columnHeaderDef') columnHeaderDef: TemplateRef<any>;
    @Input('tableBodyDef') tableBodyDef: TemplateRef<any>;






}


