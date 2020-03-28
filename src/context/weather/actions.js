import {
	SET_FORECAST_LOADING,
	SET_WEATHER_LOADING,
	SET_FORECAST,
	SET_WEATHER,
	SET_ERROR
} from './types';

export const actions = dispatch => {
	const setWeatherLoading = payload => dispatch({ type: SET_WEATHER_LOADING, payload });

	const setForecastLoading = payload => dispatch({ type: SET_FORECAST_LOADING, payload });

	const setWeatherData = payload => {
		dispatch({ type: SET_WEATHER, payload });
		setWeatherLoading(false);
	};

	const setForecastData = payload => {
		dispatch({ type: SET_FORECAST, payload });
		setForecastLoading(false);
	};

	const setForecastError = () => dispatch({ type: SET_ERROR, payload: 'forecast' });
	const setWeatherError = () => dispatch({ type: SET_ERROR, payload: 'weather' });

	const generalError = () => {
		setForecastError();
		setWeatherError();
	};

	return {
		setWeatherLoading,
		setForecastLoading,
		setWeatherData,
		setForecastData,
		generalError,
		setForecastError,
		setWeatherError
	};
};
