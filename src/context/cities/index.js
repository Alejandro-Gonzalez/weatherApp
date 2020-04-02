import { useReducer, useEffect, useCallback } from 'react';

import { actions } from './actions';
import { getGeolocation } from './operations';
import { initial, reducer } from './reducer';

const useCities = () => {
	const [state, dispath] = useReducer(reducer, initial);
	const { setCoords, setCurrentCity, setLoading, addCity, setCodes } = actions(dispath);

	const selectCity = useCallback(setCurrentCity, []);

	const addNewCity = ({ code, city }) => {
		addCity({ code, city });
		setCodes();
	};

	useEffect(() => {
		setCodes();
		setLoading(true);

		getGeolocation()
			.then(setCoords)
			.catch(() => {
				const [first] = Object.keys(state.list);
				selectCity(first);
			})
			.finally(() => setLoading(false));
	}, []);

	return { ...state, selectCity, addCity: addNewCity };
};

export default useCities;
