import React from 'react';
import { Router } from '@reach/router';

import Header from 'components/Header';
import { Provider } from 'context';
import { GlobalStyles } from '../../globalStyles';

const Layout = ({ children }) => (
	<Provider>
		<GlobalStyles />
		<Header />
		<Router>{children}</Router>
	</Provider>
);

export default Layout;
