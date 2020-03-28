import React from 'react';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Weather from 'components/Weather';
import Forecast from 'components/Forecast';
import { GlobalStyles } from 'globalStyles';
import { Provider } from './context';

export const App = () => (
	<Provider>
		<GlobalStyles />
		<Header />
		<Navigation />
		<Weather />
		<Forecast />
	</Provider>
);
