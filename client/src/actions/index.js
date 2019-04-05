import { 
    FETCH_PILOTS_PROJECTS, 
    FETCH_PILOTS_PROJECTS_SUCCESS, 

    FETCH_TOPICS_QUESTIONS, 
    FETCH_TOPICS_QUESTIONS_SUCCESS,
    FETCH_TOPICS_ANSWERS,
    FETCH_TOPICS_ANSWERS_SUCCESS,

    FETCH_RESOURCES_ARTICLES,
    FETCH_RESOURCES_ARTICLES_SUCCESS,

    FETCH_EXPERTS_PERSONNELS,
    FETCH_EXPERTS_PERSONNELS_SUCCESS
} from './types';

// Connect

// Pilots
export const fetchPilotsProjects = () => {
    return { 
        type: FETCH_PILOTS_PROJECTS
    };
}

export const fetchPilotsProjectsSuccess = (projects) => {
    return {
        type: FETCH_PILOTS_PROJECTS_SUCCESS,
        payload: projects
        
    }
}


// Topics
export const fetchTopicsQuestions = () => {
    return {
        type: FETCH_TOPICS_QUESTIONS
    }
}

export const fetchTopicsQuestionsSuccess = (questions) => {
    return {
        type: FETCH_TOPICS_QUESTIONS_SUCCESS,
        payload: questions
    }
}

export const fetchTopicsAnswers = () => {
    return {
        type: FETCH_TOPICS_ANSWERS
    }
}

export const fetchTopicsAnswersSuccess = (Answers) => {
    return {
        type: FETCH_TOPICS_ANSWERS_SUCCESS,
        payload: Answers
    }
}


// Resources
export const fetchResourcesArticles = () => {
    return {
        type: FETCH_RESOURCES_ARTICLES
    }
}

export const fetchResourcesArticlesSuccess = (articles) => {
    return {
        type: FETCH_RESOURCES_ARTICLES_SUCCESS,
        payload: articles
    }
}


// Experts
export const fetchExpertsPersonnels = () => {
    return {
        type: FETCH_EXPERTS_PERSONNELS
    }
}

export const fetchExpertsPersonnelsSuccess = (personnels) => {
    return {
        type: FETCH_EXPERTS_PERSONNELS_SUCCESS,
        payload: personnels
    }
}



