import moment from 'moment';

const isNightTime = (now, sys) => {
	const sunrise = moment.unix(sys.sunrise);
	const sunset = moment.unix(sys.sunset);
	return !moment(now).isBetween(sunrise, sunset);
};

export const getWeatherStatus = ({ id }, now, sys) => {
	const night = isNightTime(now, sys);

	switch (true) {
		case id >= 200 && id <= 210:
			return { slug: 'cloudy-with-lightning', description: 'Tormenta eléctrica' };

		case id >= 211 && id <= 299:
			return { slug: 'thunderstorm', description: 'Tormenta eléctrica con lluvia' };

		case id >= 300 && id <= 399:
			return { slug: 'rainy', description: 'Lluvia fuerte' };

		case id >= 500 && id <= 599:
			return { slug: 'rainy', description: 'Lluvizna' };

		case id >= 600 && id <= 699:
			return { slug: 'snowy', description: 'Nevado' };

		case id === 800 && night:
			return { slug: 'night', description: 'Despejado' };

		case id === 800 && !night:
			return { slug: 'sunny', description: 'Soleado' };

		case id === 801 && night:
			return { slug: 'cloudy-with-moon', description: 'Parcialmente Nublado' };

		case id === 801 && !night:
			return { slug: 'cloudy-with-sun', description: 'Parcialmente Nublado' };

		default:
			return { slug: 'cloudy', description: 'Nublado' };
	}
};
