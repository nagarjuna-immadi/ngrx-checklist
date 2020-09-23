import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { filter, map, observeOn } from 'rxjs/operators';
import { asyncScheduler, Observable } from "rxjs";
import { 
  ProjectDialogComponent,
  ProjectDialogData,
  ProjectDialogMode,
  ProjectDialogResult,
  ProjectDialogResultType
 } from "../project-dialog/project-dialog.component";

 import { Store, select } from "@ngrx/store";
 import { ApplicationState } from "../../state/app.state";
 import * as ProjectActions from "../state/projects.actions";
import { Project } from '../models/projects.model';
import { ProjectsSelectors } from "../state/projects.selectors";

@Component({
  selector: 'nc-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects$: Observable<Array<Project>>;

  constructor(private dialog: MatDialog, private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.projects$ = this.store.pipe(select(ProjectsSelectors.getProjects));
    console.log('projects', this.projects$);
  }

  navigateToProject(projectId: string) {}

  addProject() {
    this.openProjectDialog({ title: 'Add Project', submitButtonText: 'Create' })
      .pipe(
        map(({payload: newProject}) => {
          this.store.dispatch(ProjectActions.addProject({project: newProject}));

          return newProject;
        })
      )
      .subscribe(({ id }) => {
        console.log('Project Id', id);
      });
  }

  editProject() {}

  private openProjectDialog(data: Partial<ProjectDialogData>) {
    return this.dialog.open(ProjectDialogComponent, {
      minWidth: 350,
      data
    })
    .afterClosed()
    .pipe(filter(Boolean));
  }
  

}
