import { API_KEY, API_URL } from 'constant/api';
import { formatData, filterData } from 'core/format';

export const getWeatherData = async (city, country) => {
	try {
		const query = `${API_URL}/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
		const response = await fetch(query);
		const data = await response.json();

		if (data && data.code && data.code !== '200')
			throw ReferenceError('Request Error', data.message);

		return formatData(data);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const getForecastData = async (city, country) => {
	try {
		const query = `${API_URL}/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`;
		const response = await fetch(query);
		const data = await response.json();

		if (data && data.code && data.code !== '200')
			throw ReferenceError('Request Error', data.message);

		return filterData(data);
	} catch (error) {
		console.error(error);
		return error;
	}
};
