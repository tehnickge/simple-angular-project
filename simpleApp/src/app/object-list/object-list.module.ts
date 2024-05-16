import { FormsModule } from '@angular/forms';
import { ObjectListComponent } from './components/list/object-list.component';
import { NgModule } from '@angular/core';
import { ObjectItemComponent } from './components/object-item/object-item.component';
import { ObjectsRouting } from './object-list-routing.module';


@NgModule({
    imports: [FormsModule, ObjectsRouting],
    exports: [ObjectListComponent, ObjectItemComponent],
    declarations: [ObjectListComponent, ObjectItemComponent],
    providers: [],
})
export class ObjectListModule { }
