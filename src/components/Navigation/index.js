import React, { useContext } from 'react';
import { List, Item } from './styles';
import { Context } from 'context';

const Navigation = () => {
	const {
		cities: { codes, list, current, selectCity }
	} = useContext(Context);

	return (
		<List value={current.index} onChange={selectCity}>
			{codes.map((code, i) => (
				<Item key={code} label={list[code]} tabIndex={i} />
			))}
		</List>
	);
};

export default Navigation;
