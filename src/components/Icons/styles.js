import styled, { css } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import { flexCenter } from 'core/mixins';
import { getColor } from 'core/mui';

export const Container = withTheme(
	styled.span`
		${flexCenter}
	
		.white {fill: ${getColor('common', 'white')}};
		.gray {fill: ${getColor('secondary', 'light')} }
		.yellow {fill: ${getColor('secondary', 'main')}}
	
		${({ width, height }) =>
			width &&
			css`
				&&,
				svg {
					width: ${width}px;
					height: ${height || width}px;
				}
			`}
	`
);

