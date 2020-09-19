import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsListComponent } from './projects-list/projects-list.component';


@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
