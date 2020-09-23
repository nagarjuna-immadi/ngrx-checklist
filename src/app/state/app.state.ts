import { ProjectsState } from "../projects/models/projects.model";
import { RouterReducerState } from "@ngrx/router-store";

export interface ApplicationState {
    projects: ProjectsState,
    router: RouterReducerState
}