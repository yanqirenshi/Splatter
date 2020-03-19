import {
    OPEN_MODAL_UPLOAD_JSON_FILE,
    CLOSE_MODAL_UPLOAD_JSON_FILE,
} from '../actions/modals';

const modals = (state = {}, action) => {
    if (action.type===OPEN_MODAL_UPLOAD_JSON_FILE) {
        let new_state = {...state};

        new_state.json.file.upload = true;

        return new_state;
    }

    if (action.type===CLOSE_MODAL_UPLOAD_JSON_FILE) {
        let new_state = {...state};

        new_state.json.file.upload = null;

        return new_state;
    }

    return state;
};

export default modals;
