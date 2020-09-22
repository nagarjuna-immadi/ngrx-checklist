import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { map, tap } from 'rxjs/operators';
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
        tap(data => console.log("data", data))
      )
      .subscribe();
  }

  editProject() {}

  private openProjectDialog(data: Partial<ProjectDialogData>) {
    return this.dialog.open(ProjectDialogComponent, {
      minWidth: 350,
      data
    })
    .afterClosed();
  }

}
