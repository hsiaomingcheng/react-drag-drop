/*
* action type
*/
export const SET_COLOR = 'SET_COLOR';
export const SET_MIXCOLOR = 'SET_MIXCOLOR';
export const SET_COLORARRAY = 'SET_COLORARRAY';

/*
* action creator
*/
export function setColor(text) {
    return { type: SET_COLOR, text };
}
export function setMixColor(text) {
    return { type: SET_MIXCOLOR, text };
}
export function setColorArray(colorArray) {
    return { type: SET_COLORARRAY, colorArray };
}
