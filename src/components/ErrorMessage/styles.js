import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Icon from 'components/Icons';
import { flexCenter } from 'core/mixins';

export const Container = styled.div`
	${flexCenter}
	flex-direction: column;
`;

export const Image = styled(Icon).attrs({
	slug: 'error',
	height: 150,
	width: 200
})``;

export const Message = styled(Typography).attrs({
	variant: 'h3'
})`
	margin: 1rem;
`;
