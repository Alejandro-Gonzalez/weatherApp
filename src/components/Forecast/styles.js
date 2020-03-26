import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { getColor } from 'utils/mui';
import { flexCenter } from 'utils/mixins';
import ErrorMessage from 'components/ErrorMessage';
import Icons from 'components/Icons';

export const Container = withTheme(
	styled(Grid).attrs({
		container: true
	})`
		flex-wrap: nowrap;
		height: 120px;
		justify-content: space-between;
		background: ${getColor('grey', 100)};
		padding: 10px 0px;
	`
);

export const Card = styled(Grid).attrs({
	item: true
})`
	${flexCenter}
	padding: 0px 10px;
	flex-grow: 1;
	flex-direction: column;
	border-right: 2px dotted #fff;

	&:last-child {
		border-right: none;
	}
`;

export const Title = withTheme(
	styled(Typography).attrs({
		variant: 'caption'
	})`
		color: ${getColor('primary', 'light')};
		font-weight: 300;
		margin-bottom: 0.2rem;
		text-transform: capitalize;
	`
);

export const Temperature = styled(Typography).attrs({
	variant: 'caption',
	color: 'primary'
})`
	font-size: 0.7rem;
	display: flex;
	align-items: flex-start;
	letter-spacing: 0px;
`;

export const Icon = styled(Icons).attrs({
	width: 40,
	scale: 0.8
})`
	margin: 10px 0px;
`;

export const Failed = styled(ErrorMessage)`
	flex-direction: row;
	height: 120px;

	&& span,
	&& svg {
		height: 80px;
		width: 100px;
	}
`;
