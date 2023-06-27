import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';


const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message:'',
}

// handle the registration

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkApi) => {
    try {
        return authService.registerUser(userData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})


// handle the login

export const loginUser = createAsyncThunk('auth/login', async (userData, thunkApi) => {
    try {
        return authService.loginUser(userData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})


// handle the reset password

export const sendResetMail = createAsyncThunk('auth/reset-mail', async (userData, thunkApi) => {
    try {
        return authService.sendResetMail(userData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null
            })
            .addCase(registerUser.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(sendResetMail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendResetMail.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = 'Invalid email address'
            })
            .addCase(sendResetMail.fulfilled,(state)=>{
                state.isLoading = false;
                state.isSuccess = true;
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer