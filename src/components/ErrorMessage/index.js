import React from 'react';
import { Container, Message, Image } from './styles';
import { string } from 'prop-types';

const ErrorMessage = ({ message, ...rest }) => (
	<Container {...rest}>
		<Image />
		<Message>{message}</Message>
	</Container>
);

ErrorMessage.propTypes = {
	message: string
};

ErrorMessage.defaultProps = {
	message: 'Algo salío mal'
};

export default ErrorMessage;
