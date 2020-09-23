import { createSelector, createFeatureSelector } from "@ngrx/store";
import { ProjectsState } from "../projects/models/projects.model";
import { RouterReducerState } from "@ngrx/router-store";

export namespace AppSelectors {
    export const getProjectsState = createFeatureSelector<ProjectsState>('projects');
    export const getRouterReducerState = createFeatureSelector<RouterReducerState>('router');

    export const getRouterState = createSelector(
        getRouterReducerState,
        router => router.state
    );
}