import moment from 'moment';
import 'moment/locale/es';
import { getWeatherStatus } from 'core/status';

export const formatData = ({ dt, wind, main, weather, sys }) => {
	const now = moment.unix(dt);
	const date = moment(now).format('dddd DD MMMM, HH:mm');
	const shortDay = moment(now).format('ddd');
	const { speed } = wind;
	const { humidity, temp, temp_max, temp_min } = main;

	const [data] = weather || [];
	const status = getWeatherStatus(data, now, sys);
	const max = Math.round(temp_max);
	const min = Math.round(temp_min);

	return {
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

	const cummulative = (accum, curr) => {
		const parser = moment.unix(curr.dt);
		const date = moment(parser).format('dddd');
		const before = accum[date] || [];
		return { ...accum, [date]: [...before, curr] };
	};

	const nextClose = (accum, curr) => {
		if (accum && !accum.dt) return curr;
		const prev = moment(accum.dt);
		const next = moment(curr.dt);
		const diffPrev = prev.diff(current);
		const diffNext = next.diff(current);
		return diffPrev < diffNext ? accum : curr;
	};

	const week = list.reduce(cummulative, {});

	const filtered = Object.keys(week).reduce((accum, day) => {
		if (day === currentDay) return accum;
		const approx = week[day].reduce(nextClose, {});
		return [...accum, approx];
	}, []);

	return filtered.map(formatData);
};
