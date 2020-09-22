import { createAction, props } from "@ngrx/store";
import { Project } from "../models/projects.model";


export const add = createAction(
    '[Projects] add project',
    props<Partial<Project>>()
);