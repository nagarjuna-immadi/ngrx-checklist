import { createReducer, on, Action } from "@ngrx/store";
import * as ProjectActions from "./projects.actions";
import { ProjectsState, ProjectEntities, Project } from "../models/projects.model";
import { createNewProject } from "./project-state.utils";

const initialState: ProjectsState = {
    entities: {
        default: createNewProject('default')
    },
    selectedProjectId: null
};

const _projectsReducer = createReducer(
    initialState,
    on(
        ProjectActions.addProject, 
        (state: ProjectsState, action) => {
            const project = action.project;
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [project.id]: createNewProject(project.id, project.name)
                }
            }
        }
    )
);

/* const _projectEntitiesReducer = createReducer(
    on(
        ProjectActions.addProject,
        (state: ProjectsState, action) => {
            const entities = state.entities;
            const project = action.project;

            return {
                ...state,
                entities: {
                    ...entities,
                    [project.id]: createNewProject(project.id, project.name)
                }
            }
        }
    )
);

function projectEntitiesReducer(state: ProjectsState, action: Action) {
    return _projectEntitiesReducer(state, action);
} */

export function projectsReducer(state: ProjectsState, action: Action) {
    return _projectsReducer(state, action);
}
