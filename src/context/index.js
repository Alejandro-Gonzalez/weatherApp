import React, { createContext } from 'react';
import useCities from './cities';
import useWeather from './weather';

export const Context = createContext(null);

export const Provider = ({ children }) => {
	const cities = useCities();
	const weather = useWeather(cities);

	return <Context.Provider value={{ cities, weather }}>{children}</Context.Provider>;
};
