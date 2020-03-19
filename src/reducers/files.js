import {
    ADD_JSON_FILE,
} from '../actions/files';

const files = (state = {}, action) => {
    if (action.type===ADD_JSON_FILE) {
        let new_state = [...state];

        new_state.push(action.json_file);

        return new_state;
    }

    return state;
};

export default files;
