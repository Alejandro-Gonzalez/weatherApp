import React, { useContext } from 'react';
import { Context } from 'context';
import { Container, Card, Title, Temperature, Icon, Failed } from './styles';
import Skeleton from '@material-ui/lab/Skeleton';

const Forecast = () => {
	const {
		weather: {
			forecast: { loaders, loading, error, list }
		}
	} = useContext(Context);

	if (loading) {
		return (
			<Container>
				{Array(loaders)
					.fill('')
					.map((_, i) => i)
					.map(id => (
						<Card key={id}>
							<Skeleton width="60%" />
							<Skeleton variant="rect" width="100%" height={70} />
							<Skeleton width="60%" />
						</Card>
					))}
			</Container>
		);
	}

	if (!loading && error) {
		return <Failed />;
	}

	return (
		<Container>
			{list.map(({ date, max, min, shortDay, status: { slug } }) => (
				<Card key={date}>
					<Title>{shortDay}</Title>
					<Icon slug={slug} />
					<Temperature>
						<b>{max}°</b>/{min}°
					</Temperature>
				</Card>
			))}
		</Container>
	);
};

export default Forecast;
