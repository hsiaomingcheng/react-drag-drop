import { combineReducers } from 'redux';
import {
    SET_COLOR, SET_MIXCOLOR, SET_COLORARRAY,
} from './actions';

function setColor(state = '', action) {
    switch (action.type) {
        case SET_COLOR:
            return action.text;
        default:
            return state;
    }
}

function setMixColor(state = '', action) {
    switch (action.type) {
        case SET_MIXCOLOR:
            return action.text;
        default:
            return state;
    }
}

function colorList(state = [], action) {
    switch (action.type) {
        case SET_COLORARRAY:
            return action.colorArray;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    setColor,
    setMixColor,
    colorList,
});
export default rootReducer;
