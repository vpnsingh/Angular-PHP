import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { BackendComponent } from './backend/backend.component';
import { P1Component } from './parent/p1/p1.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    BackendComponent,
    P1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'backend', component: BackendComponent},
      {path: '', redirectTo:'/backend', pathMatch:'full'},
      {path: 'parent', component: ParentComponent, children: [
        {path: 'p1', component: P1Component}
      ]},
      { path: 'parent/:data', component: ParentComponent},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
