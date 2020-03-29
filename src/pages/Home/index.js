import React, { useContext, useEffect } from 'react';
import Navigation from 'components/Navigation';
import Forecast from 'components/Forecast';
import Weather from 'components/Weather';
import { Context } from 'context';

const Home = ({ code }) => {
	const {
		cities: { codes, selectCity }
	} = useContext(Context);

	useEffect(() => {
		if (code) selectCity(code);
	}, [codes, code]);

	return (
		<>
			<Navigation />
			<Weather />
			<Forecast />
		</>
	);
};

export default Home;
