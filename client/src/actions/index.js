import { 
    FETCH_PILOT_PROJECTS, 
    FETCH_PILOT_PROJECTS_SUCCESS, 

    FETCH_TOPIC_QUESTIONS, 
    FETCH_TOPIC_QUESTIONS_SUCCESS,
    FETCH_TOPIC_ANSWERS,
    FETCH_TOPIC_ANSWERS_SUCCESS
} from './types';

// Connect

// Pilots
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


// Topics
export const fetchTopicQuestions = () => {
    return {
        type: FETCH_TOPIC_QUESTIONS
    }
}

export const fetchTopicQuestionsSuccess = (questions) => {
    return {
        type: FETCH_TOPIC_QUESTIONS_SUCCESS,
        payload: questions
    }
}

export const fetchTopicAnswers = () => {
    return {
        type: FETCH_TOPIC_ANSWERS
    }
}

export const fetchTopicAnswersSuccess = (Answers) => {
    return {
        type: FETCH_TOPIC_ANSWERS_SUCCESS,
        payload: Answers
    }
}
