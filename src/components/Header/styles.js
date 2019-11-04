import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Title = styled(Typography).attrs({
	variant: 'h1',
	color: 'primary'
})`
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
	padding: 15px 10px;
`;
