import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from './orderService';

// set the initialState
const initialState = {
    orders: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}

export const postOrder = createAsyncThunk('order/post', async (order, thunkApi) => {
    try {
        
    return orderService.postOrder(order);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

export const getOrders = createAsyncThunk('order/get', async (_,thunkApi) => {
    try {
        return await orderService.getOrders();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

export const orderSlice = createSlice({
    name: 'order',
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
            .addCase(postOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postOrder.rejected, (state, action) => {
                state.orders = null
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(postOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.orders.push(action.payload);
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.orders = null
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
            })
    }
})

export const {reset} = orderSlice.actions
export default orderSlice.reducer;

