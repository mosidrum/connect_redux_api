import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baserUrl = 'https://randomuser.me/api/?results=5';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const result = await fetch(baserUrl);
    console.log(result);
    const data = await result.json();
    return data;
  } catch (error) {
    throw Error('Failed to fetch users.');
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {}
});

export const usersReducers = usersSlice.reducer;
