import { API_KEY, API_URL } from '../../config';
import { formatData, filterData } from './utils';

const fetchData = async query => {
	try {
		const response = await fetch(query);
		const data = await response.json();

		if (data && data.code && data.code !== '200')
			throw ReferenceError('Request Error', data.message);

		return data;
	} catch (error) {
		return error;
	}
};

export const getWeatherByCode = async ({ city, code }) => {
	try {
		const query = `${API_URL}/weather?q=${city},${code}&appid=${API_KEY}&units=metric`;
		const response = await fetchData(query);
		return formatData(response);
	} catch (error) {
		return error;
	}
};

export const getForecastByCode = async ({ city, code }) => {
	try {
		const query = `${API_URL}/forecast?q=${city},${code}&appid=${API_KEY}&units=metric`;
		const response = await fetchData(query);
		return filterData(response);
	} catch (error) {
		return error;
	}
};

export const getWeatherByCoords = async ([lat, lon]) => {
	try {
		const query = `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
		const response = await fetchData(query);
		return formatData(response);
	} catch (error) {
		return error;
	}
};

export const getForecastByCoords = async ([lat, lon]) => {
	try {
		const query = `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
		const response = await fetchData(query);
		return filterData(response);
	} catch (error) {
		return error;
	}
};
