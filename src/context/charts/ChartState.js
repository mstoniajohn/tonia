import React, { useReducer, useState } from 'react';
// import uuid from 'uuid';
import ChartContext from './chartContext';
import chartReducer from './chartReducer';
import axios from 'axios';

import {
	CHART_ERROR,
	GET_CHARTS,
	CLEAR_FILTER,
	OPEN_SIDEBAR,
	CLOSE_SIDEBAR,
} from '../types';

const ChartState = ({ children }) => {
	const initialState = {
		charts: null,
		current: null,
		filtered: null,
		error: null,
		sidebarOpen: false,
		// sidebarOpen: false,
	};

	const [state, dispatch] = useReducer(chartReducer, initialState);
	// const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		// setIsSidebarOpen(true);
		dispatch({ type: OPEN_SIDEBAR });
	};
	const closeSidebar = () => {
		// setIsSidebarOpen(false);
		dispatch({ type: CLOSE_SIDEBAR });
	};

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// get links
	const getCharts = async () => {
		try {
			const res = await axios.get('/api/charts');
			dispatch({ type: GET_CHARTS, payload: res.data });
		} catch (error) {
			dispatch({ type: CHART_ERROR });
		}
	};

	return (
		<ChartContext.Provider
			value={{
				charts: state.charts,
				current: state.current,
				error: state.error,
				filtered: state.filtered,
				sidebarOpen: state.sidebarOpen,

				getCharts,
				// isSidebarOpen,
				isModalOpen,
				openModal,
				closeModal,
				openSidebar,
				closeSidebar,
			}}
		>
			{children}
		</ChartContext.Provider>
	);
};

export default ChartState;
