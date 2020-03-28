import { SET_LOADING, SET_COORDS, SET_CURRENT, ADD_CITY, SET_CODES } from './types';

export const actions = dispath => {
	const setCoords = payload => dispath({ type: SET_COORDS, payload });
	const setLoading = payload => dispath({ type: SET_LOADING, payload });
	const setCurrentCity = payload => dispath({ type: SET_CURRENT, payload });
	const addCity = payload => dispath({ type: ADD_CITY, payload });
	const setCodes = () => dispath({ type: SET_CODES });

	return { setCoords, setLoading, addCity, setCodes, setCurrentCity };
};
