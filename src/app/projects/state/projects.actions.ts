import { createAction, props } from "@ngrx/store";
import { Project } from "../models/projects.model";


export const addProject = createAction(
    '[Projects] add project',
    props<{project: Partial<Project>}>()
);

export const editProject = createAction(
    '[Projects] edit project',
    props<{current: Project, updated: Partial<Project>}>()
);

export const deleteProject = createAction(
    '[Projects] delete project',
    props<{projectId: string}>()
);