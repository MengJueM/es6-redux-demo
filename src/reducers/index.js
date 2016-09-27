import {ADD_NEW_ITEM} from '../actions/ButtonActions';

export default (state = {items: []}, action) => {
    switch (action.type) {
        case ADD_NEW_ITEM:
            state.items.push(action.payload);
            return state;
        default:
            return state
    }
}