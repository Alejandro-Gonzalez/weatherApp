import { API_KEY, API_URL } from '../../config';
import { formatData, filterData } from './utils';

const fetchData = async query => {
	try {
		const response = await fetch(query);
		const data = await response.json();
		if (data && Number(data.cod) !== 200) throw new ReferenceError('Request Error', data.message);
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const getWeatherByCode = async ({ city, code }) => {
	const query = `${API_URL}/weather?q=${city},${code}&appid=${API_KEY}&units=metric`;
	const response = await fetchData(query);
	if (!response) throw new ReferenceError('Data empty');
	return formatData(response);
};

export const getForecastByCode = async ({ city, code }) => {
	const query = `${API_URL}/forecast?q=${city},${code}&appid=${API_KEY}&units=metric`;
	const response = await fetchData(query);
	if (!response) throw new ReferenceError('Data empty');
	return filterData(response);
};

export const getWeatherByCoords = async ([lat, lon]) => {
	const query = `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	const response = await fetchData(query);
	if (!response) throw new ReferenceError('Data empty');
	return formatData(response);
};

export const getForecastByCoords = async ([lat, lon]) => {
	const query = `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	const response = await fetchData(query);
	if (!response) throw new ReferenceError('Data empty');
	return filterData(response);
};
