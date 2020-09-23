import { Project } from "../models/projects.model";

export const createNewProject = (id: string, name?: string) => {
    return {
        id,
        name: name ? name : id,
        disabledCategories: {},
        items: {},
        favorites: {},
        creationTime: Date.now()
    }
};