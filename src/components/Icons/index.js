import React from 'react';
import { string } from 'prop-types';
import { Container } from './styles';

const Icons = props => {
	try {
		const { slug } = props;
		const Icon = require(`./svg/${slug}.svg`);

		if (!Icon) return new ReferenceError('No existe el archivo SVG requerido');

		return (
			<Container className={slug} {...props}>
				<Icon {...props} />
			</Container>
		);
	} catch (reason) {
		return false;
	}
};

Icons.propTypes = {
	slug: string
};

Container.defaultProps = {
	slug: '',
	width: 60
};

export default Icons;
