import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import { theme } from './theme';
import { App } from './App';

const jss = create({ ...jssPreset });

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<StylesProvider jss={jss} injectFirst>
			<App />
		</StylesProvider>
	</ThemeProvider>,
	document.getElementById('App')
);
