import React, { useContext } from 'react';
import { Title, Link } from './styles';
import { Context } from 'context';

const Header = () => {
	const {
		cities: { codes }
	} = useContext(Context);

	return (
		<Link to={`/${codes[0]}`}>
			<Title>WeatherApp</Title>
		</Link>
	);
};

export default Header;
