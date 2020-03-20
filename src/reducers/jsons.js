import {
    ADD_JSON,
} from '../actions/jsons';

const jsons = (state = {}, action) => {
    if (action.type===ADD_JSON) {
        let new_state = {...state};

        let new_list = [...new_state.list];

        new_list.push(action.json);

        new_state.list = new_list;

        return new_state;
    }

    return state;
};

export default jsons;
