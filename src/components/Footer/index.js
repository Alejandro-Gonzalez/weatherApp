import React, { useContext } from 'react';
import { Context } from 'context';
import { Caption } from './styles';

const Footer = () => {
	const {
		proyect: { version, name }
	} = useContext(Context);
	return (
		<Caption>
			{name} v{version}
		</Caption>
	);
};

export default Footer;
