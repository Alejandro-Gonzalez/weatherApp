import { useReducer, useEffect, useCallback } from 'react';

import { actions } from './actions';
import { getGeolocation } from './operations';
import { initial, reducer } from './reducer';

const useCities = () => {
	const [state, dispath] = useReducer(reducer, initial);
	const { setCoords, setCurrentCity, setLoading, addCity } = actions(dispath);

	const selectCity = code => {
		const index = Object.keys(state.list).indexOf(code);
		const city = state.list[code];
		setCurrentCity({ index, city, code });
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

	return { ...state, selectCity, addCity };
};

export default useCities;
