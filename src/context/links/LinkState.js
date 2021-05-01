import React, { useReducer } from 'react';
import uuid from 'uuid';
import LinkContext from './linkContext';
import linkReducer from './linkReducer';
import axios from 'axios';

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

const LinkState = ({ children }) => {
	const initialState = {
		links: null,
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(linkReducer, initialState);

	// get links
	const getLinks = async () => {
		const res = await axios.get('/api/links');
		dispatch({ type: GET_LINKS, payload: res.data });
	};
	// Actions to Add contact
	const addLink = async (link) => {
		// contact.id = uuid.v4();
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/links', link, config);
			dispatch({ type: ADD_LINK, payload: res.data });
		} catch (err) {
			dispatch({ type: LINK_ERROR, payload: err.response.msg });
		}
	};
	// Delete Contact
	const deleteLink = async (id) => {
		// state.contacts = state.contacts.filter(id !== state.contact.id)
		try {
			const res = await axios.delete(`/api/links/${id}`);
			dispatch({ type: DELETE_LINK, payload: id });
		} catch (err) {
			dispatch({ type: LINK_ERROR, payload: err.response.msg });
		}
	};
	// Update LINK
	const updateLink = async (link) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.put(`/api/links/${link._id}`, link, config);
			dispatch({ type: UPDATE_LINK, payload: res.data });
		} catch (err) {
			dispatch({ type: LINK_ERROR, payload: err.response.msg });
		}
	};

	// clear contact
	const clearLinks = () => {
		dispatch({ type: CLEAR_LINKS });
	};

	// Set current contact
	const setCurrent = (link) => {
		dispatch({ type: SET_CURRENT, payload: link });
	};

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Filter contact
	const filterLinks = (text) => {
		dispatch({ type: FILTER_LINKS, payload: text });
	};

	// Clear FilterContact
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<LinkContext.Provider
			value={{
				links: state.links,
				current: state.current,
				error: state.error,
				filtered: state.filtered,
				filterLinks,
				clearFilter,
				getLinks,
				addLink,
				setCurrent,
				clearCurrent,
				clearLinks,
				updateLink,
				deleteLink,
			}}
		>
			{children}
		</LinkContext.Provider>
	);
};

export default LinkState;
