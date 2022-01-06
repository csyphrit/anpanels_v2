import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        loggedIn: false,
    },
    reducers: {
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
        },
    },
});

//List actions here
export const { setLoggedIn } = userSlice.actions;

//Thunks go here
/*export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};*/

//Selectors go here
export const isLoggedIn = (state) => state.user.loggedIn;

export default userSlice.reducer;