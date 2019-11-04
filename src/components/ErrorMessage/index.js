import React from 'react';
import { Container, Message, Image } from './styles';

const ErrorMessage = ({ ...rest }) => (
	<Container {...rest}>
		<Image />
		<Message>Algo salío mal</Message>
	</Container>
);

export default ErrorMessage;
