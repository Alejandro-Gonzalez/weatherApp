import { SET_LOADING, SET_COORDS, SET_CURRENT, ADD_CITY } from './types';

export const actions = dispath => {
	const setCoords = payload => dispath({ type: SET_COORDS, payload });
	const setLoading = payload => dispath({ type: SET_LOADING, payload });
	const setCurrentCity = payload => dispath({ type: SET_CURRENT, payload });
	const addCity = payload => dispath({ type: ADD_CITY, payload });

	return { setCoords, setLoading, addCity, setCurrentCity };
};
