import {
	CLEAR_LINKS,
	ADD_LINK,
	DELETE_LINK,
	UPDATE_LINK,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_LINKS,
	LINK_ERROR,
	GET_LINKS,
	CLEAR_FILTER,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_LINKS:
			return {
				...state,
				links: action.payload,
				loading: false,
			};
		case ADD_LINK:
			return {
				...state,
				links: [action.payload, ...state.links],
				loading: false,
			};
		case UPDATE_LINK:
			return {
				...state,
				links: state.links.map((link) =>
					link._id === action.payload._id ? action.payload : link
				),
				loading: false,
			};
		case DELETE_LINK:
			return {
				...state,
				links: state.links.filter((link) => link._id !== action.payload),
				loading: false,
			};
		case CLEAR_LINKS:
			return {
				...state,
				links: null,
				filtered: null,
				error: null,
				current: null,
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case FILTER_LINKS:
			return {
				...state,
				filtered: state.links.filter((link) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return link.chartname.match(regex);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case LINK_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
