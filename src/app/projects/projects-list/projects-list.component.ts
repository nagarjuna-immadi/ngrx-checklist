import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { filter, map, observeOn } from 'rxjs/operators';
import { asyncScheduler } from "rxjs";
import { 
  ProjectDialogComponent,
  ProjectDialogData,
  ProjectDialogMode,
  ProjectDialogResult,
  ProjectDialogResultType
 } from "../project-dialog/project-dialog.component";

@Component({
  selector: 'nc-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  navigateToProject(projectId: string) {}

  addProject() {
    this.openProjectDialog({ title: 'Add Project', submitButtonText: 'Create' })
      .pipe(
        map(({payload: newProject}) => {
          console.log(newProject);
          
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
