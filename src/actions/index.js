import { FETCH_PILOT_PROJECTS, FETCH_PILOT_PROJECTS_SUCCESS } from './types';

export const fetchPilotProjects = () => {
    return { 
        type: FETCH_PILOT_PROJECTS
    };
}

export const fetchPilotProjectsSuccess = (projects) => {
    return {
        type: FETCH_PILOT_PROJECTS_SUCCESS,
        payload: projects
        
    }
}


