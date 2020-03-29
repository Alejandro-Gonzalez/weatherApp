import React, { createContext } from 'react';
import useCities from './cities';
import useWeather from './weather';
import { APP_VERSION } from 'config';

export const Context = createContext(null);

export const Provider = ({ children }) => {
	const cities = useCities();
	const weather = useWeather(cities);
	const version = APP_VERSION;

	return <Context.Provider value={{ version, cities, weather }}>{children}</Context.Provider>;
};
