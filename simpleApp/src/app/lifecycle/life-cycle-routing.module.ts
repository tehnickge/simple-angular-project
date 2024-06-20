import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { moveMessagePortToContext } from 'node:worker_threads';
import moment from 'moment';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifeCycleRouting {}
