import {
	SET_FORECAST_LOADING,
	SET_WEATHER_LOADING,
	SET_ERROR,
	SET_FORECAST,
	SET_WEATHER
} from './types';

export const initial = {
	weather: {
		error: false,
		loading: true,
		status: {},
		date: null,
		city: null,
		temp: null,
		wind: null,
		max: null,
		min: null,
		humidity: null
	},
	forecast: {
		error: false,
		loading: true,
		loaders: 5,
		list: []
	}
};

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case SET_ERROR:
			return {
				...state,
				[payload]: true
			};

		case SET_FORECAST_LOADING:
			return {
				...state,
				forecast: {
					...state.forecast,
					loading: payload
				}
			};

		case SET_WEATHER_LOADING:
			return {
				...state,
				weather: {
					...state.weather,
					loading: payload
				}
			};

		case SET_FORECAST:
			return {
				...state,
				forecast: {
					...state.forecast,
					list: payload
				}
			};

		case SET_WEATHER:
			return {
				...state,
				weather: {
					...state.weather,
					...payload
				}
			};

		default:
			return state;
	}
};
