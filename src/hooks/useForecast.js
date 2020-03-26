import { useState, useEffect } from 'react';
import { getForecastData, getWeatherData } from 'utils/forecast';

export const useForecast = (cityName, countryCode) => {
	const [error, setError] = useState(null);
	const [weather, setWeather] = useState({});
	const [extended, setExtended] = useState([]);
	const [loadingWeather, setLoadingWeather] = useState(false);
	const [loadingExtended, setLoadingExtended] = useState(false);

	useEffect(() => {
		if (cityName && countryCode) {
			setLoadingWeather(true);
			setLoadingExtended(true);

			getWeatherData(cityName, countryCode)
				.then(setWeather)
				.catch(() => setError(true))
				.finally(() => setLoadingWeather(false));

			getForecastData(cityName, countryCode)
				.then(setExtended)
				.catch(() => setError(true))
				.finally(() => setLoadingExtended(false));
		}
	}, [cityName, countryCode]);

	return {
		loadingExtended,
		extended,
		loadingWeather,
		weather,
		error
	};
};
