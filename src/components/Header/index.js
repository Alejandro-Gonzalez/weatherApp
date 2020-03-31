import React, { useContext } from 'react';
import { Title, Link } from './styles';
import { Context } from 'context';

const Header = () => {
	const {
		proyect: { name },
		cities: { codes }
	} = useContext(Context);

	return (
		<Link to={`/${codes[0]}`}>
			<Title>{name}</Title>
		</Link>
	);
};

export default Header;
