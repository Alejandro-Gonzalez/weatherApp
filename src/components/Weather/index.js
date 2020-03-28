import React, { useContext } from 'react';
import { Context } from 'context';
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

const Weather = () => {
	const {
		cities: { list },
		weather: {
			weather: {
				loading,
				error,
				date,
				code,
				temp,
				wind,
				max,
				min,
				humidity,
				status,
				status: { description, slug }
			}
		}
	} = useContext(Context);

	if (loading) {
		return (
			<Container centered>
				<Loader />
			</Container>
		);
	}

	if (!loading && error) {
		return (
			<Container centered>
				<ErrorMessage />
			</Container>
		);
	}

	return (
		<Container>
			<Header>
				<Title>{list[code]}</Title>
				<Text>
					{date} - {status && description}
				</Text>
			</Header>
			<Body>
				<Forecast>
					<Icon slug={status && slug} />
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

export default Weather;
