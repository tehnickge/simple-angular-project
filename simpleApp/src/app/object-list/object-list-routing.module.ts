import { RouterModule, Routes } from '@angular/router';
import { ObjectListComponent } from './components/list/object-list.component';
import { ObjectItemComponent } from './components/object-item/object-item.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        title: "objects",
        path: "",
        component: ObjectListComponent
    },
    {
        path: ':id',
        component: ObjectItemComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ObjectsRouting { }