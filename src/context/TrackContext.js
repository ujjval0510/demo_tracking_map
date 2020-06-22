import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const trackReducer = (action, state) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};


const fetchTrack = dispatch => async () => {
    try {
        const response = await trackerAPI.get('/tracks');
        dispatch({ type: 'fetch_tracks', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

const createTrack = dispatch => async (name, location) => {
    try {
        const response = await trackerAPI.post('/tracks', { name, location });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTrack, createTrack },
    []
);