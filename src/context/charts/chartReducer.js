import {
	GET_CHARTS,
	ADD_LINK,
	CHART_ERROR,
	OPEN_SIDEBAR,
	CLOSE_SIDEBAR,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_CHARTS:
			return {
				...state,
				charts: action.payload,
				loading: false,
			};
		case ADD_LINK:
			return {
				...state,
				links: [action.payload, ...state.links],
				loading: false,
			};
		case OPEN_SIDEBAR:
			return {
				...state,
				openSidebar: true,
			};
		case CLOSE_SIDEBAR:
			return {
				...state,
				openSidebar: false,
			};

		case CHART_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
