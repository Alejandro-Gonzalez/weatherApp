import React from 'react';
import { Router } from '@reach/router';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Provider } from 'context';
import { GlobalStyles } from '../../globalStyles';

const Layout = ({ children }) => (
	<Provider>
		<GlobalStyles />
		<Header />
		<Router>{children}</Router>
		<Footer />
	</Provider>
);

export default Layout;
