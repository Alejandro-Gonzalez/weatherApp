import { API_KEY, API_URL } from '../config';
import { formatData, filterData } from 'core/format';

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

export const getWeatherData = async (city, country) => {
	try {
		const query = `${API_URL}/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
		const response = await fetchData(query);
		return formatData(response);
	} catch (error) {
		return error;
	}
};

export const getForecastData = async (city, country) => {
	try {
		const query = `${API_URL}/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`;
		const response = await fetchData(query);
		return filterData(response);
	} catch (error) {
		return error;
	}
};
