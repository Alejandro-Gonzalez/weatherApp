import styled, { css } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { flexCenter } from 'core/mixins';
import { getColor } from 'core/mui';
import Icons from 'components/Icons';

export const Container = withTheme(
	styled(Grid).attrs({
		container: true
	})`
		padding: 20px 10px;
		background: ${getColor('grey', 100)};
		border-bottom: 1px solid ${getColor('common', 'white')};
		min-height: 260px;
		height: calc(100vh - 230px);

		${({ centered }) =>
			!!centered &&
			css`
				${flexCenter}
			`}
	`
);

export const Loader = styled(CircularProgress).attrs({
	color: 'secondary',
	size: 60
})``;

export const Header = styled(Grid).attrs({
	container: true
})`
	display: flex;
	flex-direction: column;
	flex-wrap: initial;
	margin: 10px 0px;
`;

export const Title = withTheme(
	styled(Typography).attrs({
		variant: 'h2'
	})`
		font-size: 2.4rem;
		color: ${getColor('primary', 'light')};
		font-weight: 300;
		margin-bottom: 0.2rem;
	`
);

export const Text = withTheme(
	styled(Typography).attrs({
		variant: 'subtitle1',
		component: 'p'
	})`
		color: ${getColor('grey', 600)};
		text-transform: capitalize;
	`
);

export const Body = styled(Grid).attrs({
	container: true,
	spacing: 2
})`
	height: 180px;
`;

export const Details = styled(Grid).attrs({
	item: true,
	xs: 7
})`
	${flexCenter}
	flex-direction: column;
	flex-wrap: initial;
`;

export const Forecast = styled(Grid).attrs({
	item: true,
	xs: 5
})`
	${flexCenter}
	flex-direction: column;
`;

export const Temperature = styled(Typography).attrs({
	variant: 'h1',
	color: 'primary'
})`
	font-size: 3rem;
	display: flex;
	align-items: flex-start;
	margin-bottom: 7px;
	font-weight: 600;
	letter-spacing: 0px;
`;

export const Leyend = withTheme(
	styled(Typography).attrs({
		variant: 'h2',
		color: 'primary'
	})`
		font-size: 0.8rem;
		margin-bottom: 7px;
		font-weight: 600;
		color: ${getColor('primary', 'light')};
	`
);

export const Superindice = styled(Typography).attrs({
	variant: 'caption',
	color: 'primary'
})`
	font-size: 1rem;
	font-weight: 800;
`;

export const Icon = styled(Icons).attrs({
	width: 100
})``;
