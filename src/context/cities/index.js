import { useReducer, useEffect, useCallback } from 'react';

import { actions } from './actions';
import { getGeolocation } from './operations';
import { initial, reducer } from './reducer';

const useCities = () => {
	const [state, dispath] = useReducer(reducer, initial);
	const { setCoords, setCurrentCity, setLoading, addCity, setCodes } = actions(dispath);

	const selectCity = useCallback((_, value) => setCurrentCity(value), []);

	const addNewCity = ({ code, city }) => {
		addCity({ code, city });
		setCodes();
	};

	useEffect(() => {
		setLoading(true);
		getGeolocation()
			.then(coords => {
				setLoading(false);
				setCoords(coords);
			})
			.catch(() => setLoading(false));
	}, []);

	return { ...state, selectCity, addCity: addNewCity };
};

export default useCities;
