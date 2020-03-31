import React from 'react';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import HasError from 'pages/HasError';

export const App = () => (
	<Layout>
		<Home path="/" />
		<Home path="/:code" />
		<HasError default />
	</Layout>
);
