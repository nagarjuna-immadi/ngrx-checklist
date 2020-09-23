import { createSelector } from "@ngrx/store";
import { AppSelectors } from "../../state/app.selectors";
import { Project } from "../models/projects.model";

export namespace ProjectsSelectors {

    export const getProjectEntities = createSelector(
        AppSelectors.getProjectsState,
        projects => projects.entities
    );

    // export const getProjectsScores = createSelector();

    export const getProjects = createSelector(
        getProjectEntities,
        projectEntities => {
            return Object.values(projectEntities).sort((a: Project, b: Project) => {
                return b.creationTime - a.creationTime
            });
        }
    );
}