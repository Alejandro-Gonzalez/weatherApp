import moment from 'moment';
import 'moment/locale/es';

const getWeatherStatus = ({ id }) => {
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

		case id === 800:
			return { slug: 'sunny', description: 'Soleado' };

		default:
			return { slug: 'cloudy', description: 'Nublado' };
	}
};

export const formatData = ({ dt, wind, main, weather }) => {
	const parser = moment.unix(dt);
	const date = moment(parser).format('dddd DD MMMM, HH:mm');
	const day = moment(parser).format('ddd');
	const { speed } = wind;
	const { humidity, temp, temp_max, temp_min } = main;

	const [data] = weather || [];
	const status = getWeatherStatus(data);
	const max = Math.round(temp_max);
	const min = Math.round(temp_min);

	return {
		wind: speed,
		humidity,
		status,
		date,
		temp,
		day,
		max,
		min
	};
};

export const filterData = ({ list = [] }) => {
	const current = moment().format('dddd');

	const cummulative = list.reduce((accum, curr) => {
		const parser = moment.unix(curr.dt);
		const date = moment(parser).format('dddd');
		const before = accum[date] || [];
		return { ...accum, [date]: [...before, curr] };
	}, {});

	const filtered = Object.keys(cummulative).reduce((accum, curr) => {
		if (curr === current) return accum;
		const [first] = cummulative[curr];
		return [...accum, first];
	}, []);

	return filtered.map(formatData);
};
