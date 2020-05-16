import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HellolazyComponent } from './hellolazy/hellolazy.component';

const routes: Routes = [
  { path: '', component: HellolazyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
