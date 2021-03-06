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
		background: ${getColor('grey', 300)};
		padding: 10px 0px;
	`
);

export const Card = withTheme(
	styled(Grid).attrs({
		item: true
	})`
		${flexCenter}
		padding: 0px 10px;
		flex-grow: 1;
		flex-direction: column;
		border-right: 1px solid ${getColor('grey', 200)};

		&:last-child {
			border-right: none;
		}
	`
);

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

export const Failed = withTheme(styled(ErrorMessage)`
	height: 120px;
	flex-direction: row;
	background: ${getColor('grey', 300)};
	border-top: 2px dashed ${getColor('grey', 200)};

	&& span,
	&& svg {
		height: 80px;
		width: 100px;
	}
`);
