export const ADD_JSON_FILE = 'ADD_JSON_FILE';

export const addJsonFile = (json_file) => {
    return ({
        type: ADD_JSON_FILE,
        json_file: json_file,
    });
};
