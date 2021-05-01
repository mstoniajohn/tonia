import React, { useReducer } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		error: null,
		user: null,
	};

	// state allows us to access things in state
	// diapatch allows to dispatch objects to reducer
	const [state, dispatch] = useReducer(authReducer, initialState);

	// Load User, check which user is logged in using auth endpoint
	const loadUser = async () => {
		// TODO: load token into global headers
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			// check token for valid user
			const res = await axios.get('/api/auth');
			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (err) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	// Register User, get token for sign up
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/users', formData, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			// call after dispatch
			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	//  Login user, get token for
	const login = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/auth', formData, config);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			// call after dispatch
			loadUser();
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	// Logout user destroy token
	const logout = () => dispatch({ type: LOGOUT });

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				login,
				logout,
				loadUser,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
