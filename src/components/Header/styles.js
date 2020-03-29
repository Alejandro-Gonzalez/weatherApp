import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Link as RouteLink } from '@reach/router';

export const Link = styled(RouteLink)`
	text-decoration: none;
`;

export const Title = styled(Typography).attrs({
	variant: 'h1',
	color: 'primary'
})`
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
	padding: 15px 10px;
`;
