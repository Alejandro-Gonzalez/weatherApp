import { useState, useEffect } from 'react';
import { getForecastData, getWeatherData } from 'core/forecast';

export const useForecast = (cityName, countryCode) => {
	const [weather, setWeather] = useState({});
	const [extended, setExtended] = useState([]);
	const [loadingWeather, setLoadingWeather] = useState(false);
	const [loadingExtended, setLoadingExtended] = useState(false);

	useEffect(() => {
		if (cityName && countryCode) {
			setLoadingWeather(true);
			setLoadingExtended(true)
	
			getWeatherData(cityName, countryCode)
				.then(setWeather)
				.finally(() => setLoadingWeather(false));
	
			getForecastData(cityName, countryCode)
				.then(setExtended)
				.finally(() => setLoadingExtended(false));
		}
	}, [cityName, countryCode]);

	return {
		loadingExtended,
		extended,
		loadingWeather,
		weather
	};
};
