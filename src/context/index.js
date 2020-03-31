import React, { createContext } from 'react';
import useCities from './cities';
import useWeather from './weather';
import { APP_VERSION, APP_NAME } from 'config';

export const Context = createContext(null);

export const Provider = ({ children }) => {
	const cities = useCities();
	const weather = useWeather(cities);
	const proyect = {
		version: APP_VERSION,
		name: APP_NAME
	};

	return <Context.Provider value={{ proyect, cities, weather }}>{children}</Context.Provider>;
};
