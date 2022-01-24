import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	allUsers: []
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			state.allUsers = action.payload;
		}
	}
});

export const { getUsers } = userSlice.actions;

export const fetchAllUsers = () => dispatch => {
	axios
		.get(`${process.env.REACT_APP_API_URL}/users`)
		.then(res => dispatch(getUsers(res.data)))
		.catch(err => console.log(err));
};

export default userSlice.reducer;
