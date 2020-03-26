import React from 'react';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Weather from 'components/Weather';
import Forecast from 'components/Forecast';
import { GlobalStyles } from 'globalStyles';
import { useCities } from 'hooks/useCities';
import { useForecast } from 'hooks/useForecast';

import { Provider } from './context';

export const App = () => {
	const { current, cityName, countryCode, cities, handleCity } = useCities();
	const { weather, loadingWeather, extended, loadingExtended, error } = useForecast(
		cityName,
		countryCode
	);

	return (
		<Provider>
			<GlobalStyles />
			<Header />
			<Navigation current={current} cities={cities} handleCity={handleCity} />
			<Weather isLoading={loadingWeather} error={error} city={cityName} {...weather} />
			<Forecast isLoading={loadingExtended} error={error} list={extended} />
		</Provider>
	);
};
