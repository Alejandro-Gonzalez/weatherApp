import { useReducer, useEffect } from 'react';

import { actions } from './actions';
import { initial, reducer } from './reducer';
import {
	getWeatherByCoords,
	getForecastByCoords,
	getWeatherByCode,
	getForecastByCode
} from './operations';

const useWeather = cities => {
	const [state, dispatch] = useReducer(reducer, initial);
	const {
		setWeatherData,
		setWeatherLoading,
		setForecastData,
		setForecastLoading,
		setForecastError,
		setWeatherError
	} = actions(dispatch);

	const loading = () => {
		setWeatherLoading(true);
		setForecastLoading(true);
	};

	useEffect(() => {
		if (!cities.current.city || cities.current.city === state.weather.city) return;

		loading();
		getWeatherByCode(cities.current)
			.then(setWeatherData)
			.catch(setWeatherError);
		getForecastByCode(cities.current)
			.then(setForecastData)
			.catch(setForecastError);
	}, [cities.current.city]);

	useEffect(() => {
		if (cities.coords) {
			loading();
			getWeatherByCoords(cities.coords)
				.then(response => {
					cities.addCity(response);
					if (cities.current.code === response.code || !cities.current.index)
						setWeatherData(response);
				})
				.catch(setWeatherError);
			getForecastByCoords(cities.coords)
				.then(setForecastData)
				.catch(setForecastError);
		}
	}, [cities.coords]);

	return state;
};

export default useWeather;
