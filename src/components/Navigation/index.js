import React, { useContext, useCallback } from 'react';
import { List, Item } from './styles';
import { Context } from 'context';
import { navigate } from '@reach/router';

const Navigation = () => {
	const {
		cities: { codes, list, current }
	} = useContext(Context);

	const handleChange = useCallback((_, value) => navigate(`/${codes[value]}`), [codes]);

	return (
		<List value={current.index} onChange={handleChange}>
			{codes.map((code, i) => (
				<Item key={code} label={list[code]} tabIndex={i} />
			))}
		</List>
	);
};

export default Navigation;
