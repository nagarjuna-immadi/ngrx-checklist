import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';


@NgModule({
  declarations: [ProjectsListComponent, ProjectDialogComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  entryComponents: [ProjectDialogComponent]
})
export class ProjectsModule { }
