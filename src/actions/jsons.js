export const ADD_JSON = 'ADD_JSON';

export const addJson = (json) => {
    return ({
        type: ADD_JSON,
        json: json,
    });
};
