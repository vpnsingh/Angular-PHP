import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { ParentComponent } from './parent/parent.component';
import { P1Component } from './parent/p1/p1.component';

const routes: Routes = [
    { path: 'backend', component: BackendComponent },
    { path: '', redirectTo:'/backend', pathMatch:'full' },
    { path: 'parent', component: ParentComponent, 
      children: [
        { path: 'p1', component: P1Component }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
