import { createAction, props } from "@ngrx/store";
import { Project } from "../models/projects.model";


export const addProject = createAction(
    '[Projects] add project',
    props<{project: Partial<Project>}>()
);