import React from 'react';
import { Container, Card, Title, Temperature, Icon } from './styles';
import { arrayOf, object, bool } from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';

const Forecast = ({ list, isLoading }) => (
	<Container>
		{isLoading
			? [0, 1, 2, 3, 4].map(id => (
					<Card key={id}>
						<Skeleton width="60%" />
						<Skeleton variant="rect" width="100%" height={70} />
						<Skeleton width="60%" />
					</Card>
			  ))
			: list.map(({ date, max, min, day, status }) => (
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
	isLoading: bool,
	list: arrayOf(object)
};

Forecast.defaultProps = {
	isLoading: false,
	list: []
};

export default Forecast;
