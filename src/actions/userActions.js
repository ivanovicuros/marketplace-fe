export const SET_USER = 'SET_USER';
export const SET_ITEMS = 'SET_ITEMS';

export const setUser = (user) => {
    return({type: SET_USER, payload: user});
}

export const setItems = (items) => {
    return({type: SET_ITEMS, payload: items});
}