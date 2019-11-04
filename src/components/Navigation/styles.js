import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const List = styled(Tabs).attrs({
	textColor: 'primary',
	variant: 'scrollable',
	indicatorColor: 'primary'
})`
`;

export const Item = styled(Tab).attrs({
	color: 'secondary'
})`
	width: 160px;
	height: 50px;
	font-weight: 800;
`;
