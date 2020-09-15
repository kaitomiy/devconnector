import uuid from 'uuid';

import {
    SET_ALERT,
    REMOVE_ALERT
} from './types';

export const setAlert = (msg, alerType) => dispatch => {
    const id = uuid.v4();

    dispatch({
        type: SET_ALERT,
        payload: { msg, alerType, id }
    });
};