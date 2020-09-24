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
    on(ProjectActions.addProject, (state: ProjectsState, action) => {
        const project = action.project;
        return {
            ...state,
            entities: {
                ...state.entities,
                [project.id]: createNewProject(project.id, project.name)
            }
        }
    }),
    on(ProjectActions.editProject, (state: ProjectsState, action) => {
        const current = action.current;
        const updated = action.updated;
        let entities = {...state.entities};
        delete entities[current.id];
        const updatedProject = {
            ...current,
            ...updated
        };
        entities = {
            ...entities,
            [updatedProject.id]: updatedProject
        };

        return {
            ...state,
            entities: {
                ...entities
            }
        }
    }),
    on(ProjectActions.deleteProject, (state: ProjectsState, action) => {
        const projectId = action.projectId;
        let entities = {...state.entities};
        delete entities[projectId];

        return {
            ...state,
            entities: {
                ...entities
            }
        }
    })
);

export function projectsReducer(state: ProjectsState, action: Action) {
    return _projectsReducer(state, action);
}
