import React from 'react';
import { string, objectOf, number, bool } from 'prop-types';
import ErrorMessage from 'components/ErrorMessage';
import {
	Body,
	Header,
	Forecast,
	Details,
	Title,
	Text,
	Leyend,
	Temperature,
	Superindice,
	Container,
	Loader,
	Icon
} from './styles';

const Weather = ({ city, date, temp, wind, max, min, status, humidity, isLoading, error }) => {
	if (isLoading) {
		return (
			<Container centered>
				<Loader />
			</Container>
		);
	}

	if (!isLoading && error && !date) {
		return (
			<Container centered>
				<ErrorMessage />
			</Container>
		);
	}

	return (
		<Container>
			<Header>
				<Title>{city}</Title>
				<Text>
					{date} - {status && status.description}
				</Text>
			</Header>
			<Body>
				<Forecast>
					<Icon slug={status && status.slug} />
				</Forecast>
				<Details>
					<Temperature>
						{temp}
						<Superindice>°C</Superindice>
					</Temperature>
					<Leyend>
						max: {max}° - min: {min}°
					</Leyend>
					<Text>
						Humedad: <b>{humidity}%</b>
					</Text>
					<Text>
						Viento a <b>{wind} m/seg</b>
					</Text>
				</Details>
			</Body>
		</Container>
	);
};

Weather.propTypes = {
	error: bool,
	status: objectOf(string),
	city: string,
	date: string,
	humidity: number,
	temp: number,
	wind: number,
	max: number,
	min: number,
	isLoading: bool
};

Weather.defaultProps = {
	status: {},
	error: false,
	city: '',
	date: '',
	temp: 0,
	wind: 0,
	max: 0,
	min: 0,
	humidity: 0,
	isLoading: false
};

export default Weather;
