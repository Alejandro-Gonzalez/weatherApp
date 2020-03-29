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
		generalError,
		setForecastError,
		setWeatherError
	} = actions(dispatch);

	const loading = () => {
		setWeatherLoading(true);
		setForecastLoading(true);
	};

	const handlingError = () => {
		const { weather, forecast } = state;
		if (!forecast.list.lenght) setForecastError();
		else if (!weather.date) setWeatherError();
		else generalError();
	};

	useEffect(() => {
		(async () => {
			try {
				if (!cities.current.city || cities.current.city === state.weather.city) return;
				loading();

				const weather = await getWeatherByCode(cities.current);
				setWeatherData(weather);

				const forecast = await getForecastByCode(cities.current);
				setForecastData(forecast);
			} catch (err) {
				handlingError();
			}
		})();
	}, [cities.current]);

	useEffect(() => {
		(async () => {
			try {
				if (cities.coords) {
					loading();
					const weather = await getWeatherByCoords(cities.coords);
					setWeatherData(weather);
					cities.addCity(weather);

					const forecast = await getForecastByCoords(cities.coords);
					setForecastData(forecast);
				}
			} catch (err) {
				handlingError();
			}
		})();
	}, [cities.coords]);

	return state;
};

export default useWeather;
