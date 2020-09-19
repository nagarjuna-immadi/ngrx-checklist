import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
import { ProjectsListComponent } from "./projects-list/projects-list.component";

const routes: Route[] = [
  { path: "projects", component: ProjectsListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProjectsRoutingModule { }
