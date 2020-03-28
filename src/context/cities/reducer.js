import { SET_LOADING, SET_COORDS, SET_CURRENT, ADD_CITY, SET_CODES } from './types';

export const initial = {
	loading: false,
	coords: null,
	codes: [],
	list: {
		ar: 'Buenos Aires',
		mx: 'Ciudad de México',
		es: 'Madrid',
		br: 'Brasilia',
		jp: 'Tokio',
		de: 'Berlín'
	},
	current: {
		index: 0,
		city: null,
		code: null
	}
};

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return { ...state, loading: payload };

		case SET_COORDS:
			return { ...state, coords: payload };

		case SET_CODES:
			return {
				...state,
				codes: Object.keys(state.list)
			};

		case ADD_CITY:
			return {
				...state,
				list: {
					...state.list,
					[payload.code]: payload.city
				}
			};

		case SET_CURRENT:
			return {
				...state,
				current: {
					code: state.codes[payload] || '',
					city: state.list[state.codes[payload]] || '',
					index: payload || 0
				}
			};

		default:
			return state;
	}
};
