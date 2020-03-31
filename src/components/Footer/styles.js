import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { flexCenter } from 'utils/mixins';
import { getColor } from 'utils/mui';

export const Caption = withTheme(
	styled(Typography).attrs({ variant: 'caption' })`
		background-color: ${getColor('grey', 200)};
		border-top: 1px solid ${getColor('grey', 50)};
		color: ${getColor('grey', 500)};
		${flexCenter}
	`
);
