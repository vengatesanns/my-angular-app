
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VtGridComponent } from "./vt-grid.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [VtGridComponent],
    exports: [VtGridComponent]
})
export class VtGridModule {

}