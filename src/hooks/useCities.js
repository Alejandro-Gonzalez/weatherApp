import { useState, useEffect } from 'react';
import { citiesCodes } from 'constant/citiesCodes';

export const useCities = () => {
	const cities = Object.values(citiesCodes);
	const codes = Object.keys(citiesCodes);

	const [current, setCurrent] = useState(0);
	const [cityName, setCityName] = useState(cities[0]);
	const [countryCode, setCountryCode] = useState(codes[0]);

	const handleCity = (e, value) => setCurrent(value);

	useEffect(() => {
		setCityName(cities[current]);
		setCountryCode(codes[current]);
	}, [current]);

	return {
		handleCity,
		countryCode,
		cityName,
		current,
		cities
	};
};
