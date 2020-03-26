import moment from 'moment';
import 'moment/locale/es';

const isNightTime = (now, sys) => {
	const sunrise = moment.unix(sys.sunrise);
	const sunset = moment.unix(sys.sunset);
	return !moment(now).isBetween(sunrise, sunset);
};

const getWeatherStatus = ({ id }, now, sys) => {
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

export const formatData = ({ dt, wind, main, weather, sys, name: city }) => {
	const now = moment.unix(dt);
	const date = moment(now).format('dddd DD MMMM, HH:mm');
	const shortDay = moment(now).format('ddd');
	const { speed } = wind;
	const { humidity, temp, temp_max, temp_min } = main;

	const [data] = weather || [];
	const code = sys && sys.country && sys.country.toLowerCase();
	const status = getWeatherStatus(data, now, sys);
	const max = Math.round(temp_max);
	const min = Math.round(temp_min);

	return {
		city,
		code,
		wind: speed,
		shortDay,
		humidity,
		status,
		date,
		temp,
		max,
		min
	};
};

export const filterData = ({ list = [] }) => {
	const current = moment();
	const currentDay = current.format('dddd');

	const nextClose = (accum, curr) => {
		if (accum && !accum.dt) return curr;
		const prev = moment(accum.dt);
		const next = moment(curr.dt);
		const diffPrev = prev.diff(current);
		const diffNext = next.diff(current);
		return diffPrev < diffNext ? accum : curr;
	};

	const week = list.reduce((accum, curr) => {
		const parser = moment.unix(curr.dt);
		const date = moment(parser).format('dddd');
		const before = accum[date] || [];
		return { ...accum, [date]: [...before, curr] };
	}, {});

	const filtered = Object.keys(week).reduce((accum, day) => {
		if (day === currentDay) return accum;
		const approx = week[day].reduce(nextClose, {});
		return [...accum, approx];
	}, []);

	return filtered.map(formatData);
};
