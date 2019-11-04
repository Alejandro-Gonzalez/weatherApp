import React from 'react';
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

const Weather = ({ city, date, temp, wind, max, min, status, humidity, isLoading }) => (
	<Container isLoading={isLoading}>
		{isLoading ? (
			<Loader />
		) : (
			<>
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
			</>
		)}
	</Container>
);

Weather;

export default Weather;
