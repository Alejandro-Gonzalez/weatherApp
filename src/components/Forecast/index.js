import React from 'react';
import { Container, Card, Title, Temperature, Icon } from './styles';
import { arrayOf, object } from 'prop-types';

const Forecast = ({ list }) => (
	<Container>
		{list.map(({ date, max, min, day, status }) => (
			<Card key={date}>
				<Title>{day}</Title>
				<Icon slug={status && status.slug} />
				<Temperature>
					<b>{max}°</b>/{min}°
				</Temperature>
			</Card>
		))}
	</Container>
);

Forecast.propTypes = {
	list: arrayOf(object)
};

Forecast.defaultProps = {
	list: []
};

export default Forecast;
