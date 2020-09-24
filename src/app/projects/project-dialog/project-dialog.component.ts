import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Project } from "../models/projects.model";
import { convertToProjectId } from '../../shared/utils';

export enum ProjectDialogMode {
  Create = 'Create',
  Edit = 'Edit'
}

export enum ProjectDialogResultType {
  AddOrEdit = 'AddOrEdit',
  Delete = 'Delete'
}

export interface ProjectDialogData {
  title: string;
  submitButtonText: string;
  project: Project;
  mode: ProjectDialogMode;
}

export interface ProjectDialogResult {
  payload: Partial<Project>;
  type: ProjectDialogResultType;
}

class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

const verifyProjectName = (projectName: string) => {
  return (control: FormControl) => {
    return control.value === projectName ? null : { verifyProjectName: true };
  };
};

@Component({
  selector: 'nc-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {

  mode: ProjectDialogMode;
  title: string;
  project: Partial<Project>;
  submitButtonText: string;
  enableDangerZone = false;
  showDangerZone = false;
  maxLength = 25;

  projectName = new FormControl('', [Validators.required, Validators.maxLength(this.maxLength)]);
  verifyProjectName = new FormControl('');
  errorStateMatcher = new CustomErrorStateMatcher();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData,
    public dialogRef: MatDialogRef<ProjectDialogComponent, ProjectDialogResult>
  ) { }

  ngOnInit(): void {
    const { title, project, mode = ProjectDialogMode.Create, submitButtonText } = this.data;
    console.log(this.data);

    this.project = project ? project : { name: '' };
    this.mode = mode;
    this.title = title;
    this.submitButtonText = !submitButtonText ? title : submitButtonText;
    this.projectName.setValue(this.project.name);
  }

  close() {
    if (this.canClose()) {
      const projectName = this.projectName.value;
      const projectId = this.generateProjectId(projectName);

      const result: ProjectDialogResult = {
        type: ProjectDialogResultType.AddOrEdit,
        payload: { id: projectId, name: projectName }
      };

      return this.dialogRef.close(result);
    }
  }

  canClose() {
    return (
      this.projectName.valid &&
      !this.projectName.pending &&
      this.projectName.dirty &&
      !this.projectName.pristine &&
      this.hasChanged(this.projectName.value, this.project.name)
    );
  }

  private generateProjectId(name: string) {
    return convertToProjectId(name.trim());
  }

  private hasChanged(current: string, old: string) {
    const currentId = this.generateProjectId(current);
    const oldId = this.generateProjectId(old);

    return currentId !== oldId;
  }

}
