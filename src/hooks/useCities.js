import { useState, useEffect } from 'react';

export const useCities = () => {
	const reference = {
		arg: 'Buenos Aires',
		mex: 'Ciudad de México',
		esp: 'Madrid',
		bra: 'Brasilia',
		jpn: 'Tokio',
		deu: 'Berlín'
	};
	const cities = Object.values(reference);
	const codes = Object.keys(reference);

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
