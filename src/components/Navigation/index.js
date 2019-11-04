import React from 'react';
import { List, Item } from './styles';
import { number, func, arrayOf, string } from 'prop-types';

const Navigation = ({ current, cities, handleCity }) => (
	<List value={current} onChange={handleCity}>
		{cities.map((name, i) => (
			<Item key={name} label={name} tabIndex={i} />
		))}
	</List>
);

Navigation.propTypes = {
	current: number,
	cities: arrayOf(string),
	handleCity: func
};

Navigation.defaultProps = {
	current: 0,
	cities: [],
	handleCity: () => {}
};

export default Navigation;
