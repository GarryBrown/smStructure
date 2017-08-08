import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksRoutingModule, UserResolvePagingParams } from "./tasks-routing.module";

import { SharedModule } from '../../shared';
import {
  ListTasksComponent,
  TaskItemComponent,
  TaskEditComponent,
  TaskDetailsComponent,
  TasksPopupComponent
} from "./components";
import { TasksService, TasksPopupService } from './services';



@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  declarations: [
    ListTasksComponent, TaskItemComponent,
    TaskEditComponent, TaskDetailsComponent,
    TasksPopupComponent
  ],
  entryComponents: [
    TaskEditComponent, TaskDetailsComponent
  ],
  providers: [
    UserResolvePagingParams,
    TasksService,
    TasksPopupService
  ]
})
export class TasksModule { }
