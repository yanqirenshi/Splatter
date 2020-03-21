import {
    ADD_JSON,
} from '../actions/jsons';

const jsons = (state = {}, action) => {
    if (action.type===ADD_JSON) {
        let json = action.json;

        let new_state = {...state};

        let new_list = [...new_state.list];

        new_list.push(json);

        new_state.list = new_list;

        new_state.selected = json;

        return new_state;
    }

    return state;
};

export default jsons;
