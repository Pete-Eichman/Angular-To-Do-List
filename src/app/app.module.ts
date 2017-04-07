import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { TaskDetailComponent }  from './task-detail.component';
import { TasksComponent }      from './tasks.component';
import { TaskService }          from './task.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskDetailComponent,
    TasksComponent
  ],
  providers: [ TaskService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
